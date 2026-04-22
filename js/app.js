// =============================================================================
// COURS JAVASCRIPT - APPLICATION PRINCIPALE
// =============================================================================
// Gère la navigation, les exercices, les quiz et la console
// =============================================================================

import { lessons } from './lessons.js';

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
    totalLessons: lessons.length,
    storage: {
        theme: 'js-course-theme',
        progress: 'js-course-progress',
        currentLesson: 'js-course-current-lesson'
    }
};

// =============================================================================
// STATE
// =============================================================================

let state = {
    currentLessonIndex: 0,
    completedLessons: [],
    theme: 'dark'
};

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadState();
    renderSidebar();
    renderLesson();
    initNavigation();
    initThemeToggle();
    initMobileSidebar();
    initSearch();
    initConsole();
    updateProgress();
}

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

function loadState() {
    const savedTheme = localStorage.getItem(CONFIG.storage.theme);
    if (savedTheme === 'light') {
        state.theme = 'light';
        document.documentElement.classList.remove('dark');
    }
    
    const savedProgress = localStorage.getItem(CONFIG.storage.progress);
    if (savedProgress) {
        state.completedLessons = JSON.parse(savedProgress);
    }
    
    const savedLesson = localStorage.getItem(CONFIG.storage.currentLesson);
    if (savedLesson) {
        state.currentLessonIndex = parseInt(savedLesson);
    }
}

function saveState() {
    localStorage.setItem(CONFIG.storage.theme, state.theme);
    localStorage.setItem(CONFIG.storage.progress, JSON.stringify(state.completedLessons));
    localStorage.setItem(CONFIG.storage.currentLesson, state.currentLessonIndex.toString());
}

// =============================================================================
// SIDEBAR
// =============================================================================

function renderSidebar() {
    const nav = document.getElementById('lessonNav');
    if (!nav) return;
    
    nav.innerHTML = lessons.map((lesson, index) => `
        <button class="lesson-btn w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm mb-1 flex items-center justify-between" data-index="${index}">
            <span><span class="text-primary">${String(lesson.number).padStart(2, '0')}.</span> ${lesson.title}</span>
            <i class="fas fa-check-circle text-primary hidden completed-icon ${state.completedLessons.includes(index) ? '' : 'hidden'}"></i>
        </button>
    `).join('');
    
    // Add reset button
    const resetBtn = document.getElementById('resetProgress');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetProgress);
    }
}

function updateSidebarProgress() {
    const buttons = document.querySelectorAll('.lesson-btn');
    buttons.forEach((btn, index) => {
        const icon = btn.querySelector('.completed-icon');
        if (state.completedLessons.includes(index)) {
            icon?.classList.remove('hidden');
        } else {
            icon?.classList.add('hidden');
        }
    });
}

// =============================================================================
// LESSON RENDERING
// =============================================================================

function renderLesson() {
    const lesson = lessons[state.currentLessonIndex];
    if (!lesson) return;
    
    // Hide all lessons
    document.querySelectorAll('.lesson-content').forEach(el => el.classList.remove('active'));
    
    // Show current lesson
    let lessonEl = document.getElementById(lesson.id);
    
    if (!lessonEl) {
        // Create lesson element dynamically
        lessonEl = createLessonElement(lesson);
        document.querySelector('.lesson-container')?.appendChild(lessonEl);
    }
    
    lessonEl?.classList.add('active');
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = state.currentLessonIndex === 0;
        prevBtn.classList.toggle('opacity-50', state.currentLessonIndex === 0);
    }
    
    if (nextBtn) {
        nextBtn.disabled = state.currentLessonIndex === lessons.length - 1;
        nextBtn.classList.toggle('opacity-50', state.currentLessonIndex === lessons.length - 1);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Initialize lesson interactions
    initLessonInteractions(lesson);
}

function createLessonElement(lesson) {
    const div = document.createElement('section');
    div.id = lesson.id;
    div.className = 'lesson-content';
    
    div.innerHTML = `
        <div class="mb-8">
            <span class="text-primary text-sm font-medium">${lesson.number}/${lessons.length} • ${lesson.duration}</span>
            <h2 class="text-3xl font-bold mt-2 mb-4">${lesson.title}</h2>
        </div>
        
        <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
            <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">Objectifs</h4>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>
        
        <div class="lesson-content-body mb-6">
            ${lesson.content}
        </div>
        
        ${lesson.exercises?.length > 0 ? `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4"><i class="fas fa-laptop-code text-primary mr-2"></i>Exercices</h3>
            ${lesson.exercises.map(ex => `
                <div class="mb-4 last:mb-0">
                    <p class="text-gray-600 dark:text-gray-400 mb-2">${ex.question}</p>
                    <div class="flex gap-2">
                        <input type="text" 
                            class="exercise-input flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            placeholder="${ex.answer}" 
                            data-exercise="${ex.id}" 
                            data-answer="${ex.answer}">
                        <button class="check-exercise px-4 py-2 bg-primary hover:bg-emerald-600 text-white rounded-lg" data-exercise="${ex.id}">
                            Vérifier
                        </button>
                    </div>
                    <p class="exercise-result mt-2 text-sm hidden"></p>
                </div>
            `).join('')}
        </div>
        ` : ''}
        
        ${lesson.quiz?.length > 0 ? `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4"><i class="fas fa-question-circle text-secondary mr-2"></i>Quiz</h3>
            ${lesson.quiz.map((q, i) => `
                <div class="quiz-question mb-4 last:mb-0" data-quiz="${q.id}">
                    <p class="font-medium mb-3">${q.question}</p>
                    <div class="space-y-2">
                        ${q.options.map(opt => `
                            <button class="quiz-option w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700" data-answer="${opt}">${opt}</button>
                        `).join('')}
                    </div>
                    <p class="quiz-result mt-3 text-sm font-medium hidden"></p>
                </div>
            `).join('')}
        </div>
        ` : ''}
    `;
    
    return div;
}

// =============================================================================
// NAVIGATION
// =============================================================================

function initNavigation() {
    const lessonBtns = document.querySelectorAll('.lesson-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    lessonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            goToLesson(index);
        });
    });
    
    prevBtn?.addEventListener('click', () => {
        if (state.currentLessonIndex > 0) {
            goToLesson(state.currentLessonIndex - 1);
        }
    });
    
    nextBtn?.addEventListener('click', () => {
        markLessonCompleted();
        if (state.currentLessonIndex < lessons.length - 1) {
            goToLesson(state.currentLessonIndex + 1);
        }
    });
}

function goToLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    
    state.currentLessonIndex = index;
    saveState();
    renderLesson();
    
    // Close mobile sidebar
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar?.classList.remove('open');
    overlay?.classList.add('hidden');
}

function markLessonCompleted() {
    if (!state.completedLessons.includes(state.currentLessonIndex)) {
        state.completedLessons.push(state.currentLessonIndex);
        saveState();
        updateSidebarProgress();
        updateProgress();
    }
}

// =============================================================================
// PROGRESS
// =============================================================================

function updateProgress() {
    const progress = (state.completedLessons.length / CONFIG.totalLessons) * 100;
    
    const progressBar = document.getElementById('progressBar');
    const sidebarProgress = document.getElementById('sidebarProgress');
    const progressText = document.getElementById('progressText');
    
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (sidebarProgress) sidebarProgress.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${Math.round(progress)}%`;
}

function resetProgress() {
    if (confirm('Réinitialiser toute la progression ?')) {
        state.completedLessons = [];
        state.currentLessonIndex = 0;
        saveState();
        updateSidebarProgress();
        updateProgress();
        goToLesson(0);
    }
}

// =============================================================================
// THEME
// =============================================================================

function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    
    toggle?.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark');
        saveState();
    });
}

// =============================================================================
// MOBILE SIDEBAR
// =============================================================================

function initMobileSidebar() {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    menuBtn?.addEventListener('click', () => {
        sidebar?.classList.toggle('open');
        overlay?.classList.toggle('hidden');
    });
    
    overlay?.addEventListener('click', () => {
        sidebar?.classList.remove('open');
        overlay?.classList.add('hidden');
    });
}

// =============================================================================
// SEARCH
// =============================================================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults?.classList.add('hidden');
            return;
        }
        
        const results = lessons.filter(l => 
            l.title.toLowerCase().includes(query) || 
            l.keywords?.some(k => k.toLowerCase().includes(query))
        );
        
        if (results.length > 0 && searchResults) {
            searchResults.innerHTML = results.map(r => 
                `<button class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" data-index="${r.number - 1}">
                    ${r.title}
                </button>`
            ).join('');
            searchResults.classList.remove('hidden');
            
            searchResults.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', () => {
                    goToLesson(parseInt(btn.dataset.index));
                    searchResults.classList.add('hidden');
                    searchInput.value = '';
                });
            });
        } else {
            searchResults?.classList.add('hidden');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput?.contains(e.target) && !searchResults?.contains(e.target)) {
            searchResults?.classList.add('hidden');
        }
    });
}

// =============================================================================
// CONSOLE
// =============================================================================

function initConsole() {
    const runButtons = document.querySelectorAll('.run-btn');
    
    runButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            if (code) executeCode(code);
        });
    });
}

function executeCode(code) {
    const output = document.getElementById('consoleOutput');
    if (!output) return;
    
    output.innerHTML = '';
    
    try {
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
            logs.push(args.map(a => 
                typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)
            ).join(' '));
        };
        
        eval(code);
        console.log = originalLog;
        
        if (logs.length > 0) {
            output.innerHTML = logs.map(log => 
                `<div class="border-b border-gray-800 py-1 whitespace-pre-wrap">${log}</div>`
            ).join('');
        } else {
            output.innerHTML = '<span class="text-gray-500">Code exécuté (pas de sortie)</span>';
        }
    } catch (error) {
        output.innerHTML = `<div class="text-red-400">Erreur: ${error.message}</div>`;
    }
}

// =============================================================================
// LESSON INTERACTIONS
// =============================================================================

function initLessonInteractions(lesson) {
    // Initialize run buttons
    const runButtons = document.querySelectorAll('.run-btn');
    runButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            if (code) executeCode(code);
        });
    });
    
    // Initialize exercises
    const checkButtons = document.querySelectorAll('.check-exercise');
    checkButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseId = btn.dataset.exercise;
            checkExercise(exerciseId);
        });
    });
    
    // Initialize quiz
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            const question = option.closest('.quiz-question');
            handleQuizAnswer(question, option);
        });
    });
}

function checkExercise(exerciseId) {
    const input = document.querySelector(`input[data-exercise="${exerciseId}"]`);
    const result = input?.parentElement.querySelector('.exercise-result');
    const expectedAnswer = input?.dataset.answer;
    
    if (!input || !result || !expectedAnswer) return;
    
    const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, '');
    const expected = expectedAnswer.toLowerCase().replace(/\s+/g, '');
    
    if (userAnswer === expected) {
        input.classList.add('correct');
        input.classList.remove('incorrect');
        result.textContent = '✓ Correct ! Bien joué !';
        result.className = 'exercise-result mt-2 text-sm text-green-500';
        result.classList.remove('hidden');
    } else {
        input.classList.add('incorrect');
        input.classList.remove('correct');
        result.textContent = '✗ Incorrect. Réessayez !';
        result.className = 'exercise-result mt-2 text-sm text-red-500';
        result.classList.remove('hidden');
    }
}

function handleQuizAnswer(question, option) {
    const questionId = question.dataset.quiz;
    const result = question.querySelector('.quiz-result');
    
    // Find correct answer
    const lesson = lessons[state.currentLessonIndex];
    const quiz = lesson.quiz?.find(q => q.id === questionId);
    
    if (!quiz) return;
    
    const correctAnswer = quiz.correct;
    const userAnswer = option.dataset.answer;
    
    // Reset all options
    question.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected', 'bg-green-500', 'border-green-500', 'bg-red-500', 'border-red-500');
        opt.classList.add('bg-gray-50', 'dark:bg-gray-700');
    });
    
    if (userAnswer === correctAnswer) {
        option.classList.add('selected', 'bg-green-500', 'border-green-500');
        result.textContent = '✓ Correct !';
        result.className = 'quiz-result mt-3 text-sm font-medium text-green-500';
        result.classList.remove('hidden');
    } else {
        option.classList.add('bg-red-500', 'border-red-500');
        result.textContent = `✗ Incorrect. La réponse était: ${correctAnswer}`;
        result.className = 'quiz-result mt-3 text-sm font-medium text-red-500';
        result.classList.remove('hidden');
    }
}

// =============================================================================
// EXPORTS
// =============================================================================

export { goToLesson, markLessonCompleted, executeCode };