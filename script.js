// 學生資料 (已根據您的 CSV 檔案更新並排序)
const studentsWithSeat = [
{
 "seat": 1,
 "name": "李修全",
 "score": 0
},
{
 "seat": 3,
 "name": "唐睿妤",
 "score": 0
},
{
 "seat": 4,
 "name": "王又可",
 "score": 0
},
{
 "seat": 6,
 "name": "蔡宇承",
 "score": 0
},
{
 "seat": 7,
 "name": "劉若芊",
 "score": 0
},
{
 "seat": 8,
 "name": "詹沐安",
 "score": 0
},
{
 "seat": 9,
 "name": "張景翔",
 "score": 0
},
{
 "seat": 11,
 "name": "陳宥楠",
 "score": 0
},
{
 "seat": 13,
 "name": "王冠曄",
 "score": 0
},
{
 "seat": 14,
 "name": "徐翊瑋",
 "score": 0
},
{
 "seat": 16,
 "name": "施姵岑",
 "score": 0
},
{
 "seat": 17,
 "name": "葉彥妤",
 "score": 0
},
{
 "seat": 18,
 "name": "胡伊涵",
 "score": 0
},
{
 "seat": 20,
 "name": "張之又",
 "score": 0
},
{
 "seat": 22,
 "name": "劉昱瑩",
 "score": 0
},
{
 "seat": 24,
 "name": "蔡承諺",
 "score": 0
},
{
 "seat": 25,
 "name": "楊俊緯",
 "score": 0
},
{
 "seat": 26,
 "name": "陳柏丞",
 "score": 0
},
{
 "seat": 27,
 "name": "侯凱元",
 "score": 0
},
{
 "seat": 29,
 "name": "洪兆邑",
 "score": 0
},
{
 "seat": 30,
 "name": "邱韋綸",
 "score": 0
},
{
 "seat": 31,
 "name": "郭啓宏",
 "score": 0
},
{
 "seat": 32,
 "name": "鄭傳耀",
 "score": 0
},
{
 "seat": 33,
 "name": "張守騏",
 "score": 0
},
{
 "seat": 34,
 "name": "王品超",
 "score": 0
},
{
 "seat": 35,
 "name": "張博彥",
 "score": 0
},
{
 "seat": 37,
 "name": "吳宜芳",
 "score": 0
},
{
 "seat": 38,
 "name": "朱鳳凌",
 "score": 0
},
{
 "seat": 39,
 "name": "林家嫺",
 "score": 0
},
{
 "seat": 40,
 "name": "陳品翰",
 "score": 0
},
{
 "seat": 41,
 "name": "劉芮錡",
 "score": 0
},
{
 "seat": 42,
 "name": "李瑋宸",
 "score": 0
},
{
 "seat": 43,
 "name": "陳舒婷",
 "score": 0
},
{
 "seat": 44,
 "name": "詹宜臻",
 "score": 0
},
{
 "seat": 45,
 "name": "賴承鍇",
 "score": 0
},
{
 "seat": 46,
 "name": "蔡欣諭",
 "score": 0
},
{
 "seat": 47,
 "name": "李昶毅",
 "score": 0
},
{
 "seat": 48,
 "name": "劉統傑",
 "score": 0
},
{
 "seat": 49,
 "name": "劉易承",
 "score": 0
},
{
 "seat": 50,
 "name": "鄒采珊",
 "score": 0
},
{
 "seat": 51,
 "name": "胡宇彤",
 "score": 0
},
{
 "seat": 52,
 "name": "洪赫奕",
 "score": 0
},
{
 "seat": 53,
 "name": "邱子齊",
 "score": 0
},
{
 "seat": 54,
 "name": "阮孟勇",
 "score": 0
}
]
;
const studentsWithoutSeat = [
{
 "name": "陳樂生",
 "score": 0
},
{
 "name": "羅業凱",
 "score": 0
},
{
 "name": "侯兆軒",
 "score": 0
},
{
 "name": "郭育宗",
 "score": 0
},
{
 "name": "王柏鈞",
 "score": 0
},
{
 "name": "陳伸鋒",
 "score": 0
},
{
 "name": "謝駿賢",
 "score": 0
},
{
 "name": "陳毅嘉",
 "score": 0
},
{
 "name": "陳　薇",
 "score": 0
},
{
 "name": "陳心妮",
 "score": 0
},
{
 "name": "黃睿傑",
 "score": 0
},
{
 "name": "張鈞皓",
 "score": 0
}
]
;

let selectedStudentName = '';
let draggedElement = null;
let draggedStudentName = null;
let draggedStudentSeat = null;

// --- 座位表生成 ---
function generateSeatingChart() {
    const seatingChart = document.getElementById('seatingChart');
    seatingChart.innerHTML = ''; // 清空現有內容
    const maxSeat = 54; // 最大座號

    for (let i = 1; i <= maxSeat; i++) {
        const student = studentsWithSeat.find(s => s.seat === i);
        const seatDiv = document.createElement('div');

        if (student) {
            // 有學生的座位卡
            seatDiv.className = 'seat-card bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200 cursor-pointer';
            seatDiv.draggable = true;
            seatDiv.dataset.seat = student.seat;
            seatDiv.dataset.name = student.name;
            seatDiv.innerHTML = `
                <div class="text-center">
                    <div class="text-sm text-blue-600 font-semibold mb-1">座號 ${student.seat}</div>
                    <div class="font-bold text-gray-900 mb-2">${student.name}</div>
                    <div class="text-xs text-gray-500">積分: <span class="score">${student.score}</span></div>
                </div>
            `;
            seatDiv.addEventListener('click', () => openScorePopup(student.name));
            addDragListeners(seatDiv, student.name, student.seat);
            addDropListeners(seatDiv, student.seat);
        } else {
            // 空位卡
            seatDiv.className = 'seat-card bg-gray-100 rounded-xl p-4 shadow-lg border-2 border-dashed border-gray-300';
            seatDiv.dataset.seat = i;
            seatDiv.innerHTML = `
                <div class="text-center">
                    <div class="text-sm text-gray-400 font-semibold mb-1">座號 ${i}</div>
                    <div class="text-gray-400">空位</div>
                </div>
            `;
            addDropListeners(seatDiv, i);
        }

        seatingChart.appendChild(seatDiv);
    }
}

// --- 未分配學生列表生成 ---
function generateUnassignedStudents() {
    const container = document.getElementById('unassignedStudents');
    
    // 為了確保拖曳監聽器不會重複綁定，採用克隆替換技巧
    const oldContainer = document.getElementById('unassignedStudents');
    oldContainer.replaceWith(oldContainer.cloneNode(true));
    const newUnassignedContainer = document.getElementById('unassignedStudents');
    newUnassignedContainer.innerHTML = ''; // 清空現有內容

    studentsWithoutSeat.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'seat-card no-seat bg-white rounded-xl p-4 shadow-lg cursor-pointer';
        studentDiv.draggable = true;
        studentDiv.dataset.name = student.name;
        studentDiv.innerHTML = `
            <div class="text-center">
                <div class="text-sm text-red-600 font-semibold mb-1">未分配</div>
                <div class="font-bold text-gray-900 mb-2">${student.name}</div>
                <div class="text-xs text-gray-500">積分: <span class="score">${student.score}</span></div>
            </div>
        `;
        studentDiv.addEventListener('click', () => openScorePopup(student.name));
        addDragListeners(studentDiv, student.name, null); // seatNumber 為 null 表示未分配
        newUnassignedContainer.appendChild(studentDiv);
    });

    // 為未分配學生區塊添加拖曳目標監聽器 (用於將座位表中的學生拖出)
    newUnassignedContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (draggedElement && draggedElement.dataset.seat) {
            e.dataTransfer.dropEffect = 'move';
            newUnassignedContainer.classList.add('drop-zone');
        }
    });

    newUnassignedContainer.addEventListener('dragleave', () => {
        newUnassignedContainer.classList.remove('drop-zone');
    });

    newUnassignedContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        newUnassignedContainer.classList.remove('drop-zone');

        if (draggedStudentSeat !== null) {
             const draggedStudentIndex = studentsWithSeat.findIndex(s => s.seat === draggedStudentSeat);

            if (draggedStudentIndex !== -1) {
                // 將學生從已分配座位列表中移除，並放入未分配學生列表中
                const draggedStudent = studentsWithSeat.splice(draggedStudentIndex, 1)[0];
                draggedStudent.seat = null;
                studentsWithoutSeat.push(draggedStudent);
            }
            
            // 重新生成顯示內容
            generateSeatingChart();
            generateUnassignedStudents();
            updateStatistics();
        }
    });
}


// --- 拖曳事件處理 (被拖曳的元素) ---
function addDragListeners(element, studentName, seatNumber) {
    element.addEventListener('dragstart', (e) => {
        draggedElement = element;
        draggedStudentName = studentName;
        draggedStudentSeat = seatNumber;
        element.classList.add('dragging');
        e.dataTransfer.setData('text/plain', studentName);
        e.dataTransfer.effectAllowed = 'move';
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
        draggedElement = null;
        draggedStudentName = null;
        draggedStudentSeat = null;
    });
}

// --- 拖曳事件處理 (放置目標) ---
function addDropListeners(element, targetSeat) {
    element.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (draggedElement && draggedElement !== element) {
            e.dataTransfer.dropEffect = 'move';
            element.classList.add('drop-zone');
        }
    });

    element.addEventListener('dragleave', () => {
        element.classList.remove('drop-zone');
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();
        element.classList.remove('drop-zone');

        if (!draggedStudentName || draggedElement === element) return;

        const targetElement = element;
        const targetStudentSeat = targetElement.dataset.seat ? parseInt(targetElement.dataset.seat) : null;
        
        // --- 邏輯 1: 座位區塊內拖曳 (交換或佔位) ---
        if (targetStudentSeat !== null) {
            
            // 拖曳來源：已分配座位 (SEAT -> SEAT)
            if (draggedStudentSeat !== null) {
                const draggedStudentIndex = studentsWithSeat.findIndex(s => s.seat === draggedStudentSeat);
                const targetStudentIndex = studentsWithSeat.findIndex(s => s.seat === targetStudentSeat);
                
                if (draggedStudentIndex !== -1 && targetStudentIndex !== -1) {
                    // 目標有學生: SWAP (只交換數據，不交換 seat 號碼)
                    const draggedStudent = studentsWithSeat[draggedStudentIndex];
                    const targetStudent = studentsWithSeat[targetStudentIndex];
                    
                    const tempName = draggedStudent.name;
                    const tempScore = draggedStudent.score;
                    
                    draggedStudent.name = targetStudent.name;
                    draggedStudent.score = targetStudent.score;
                    
                    targetStudent.name = tempName;
                    targetStudent.score = tempScore;
                    
                } else if (draggedStudentIndex !== -1 && targetStudentIndex === -1) {
                    // 目標是空位: MOVE
                    const draggedStudent = studentsWithSeat.splice(draggedStudentIndex, 1)[0];
                    draggedStudent.seat = targetSeat;
                    studentsWithSeat.push(draggedStudent);
                }
            
            // 拖曳來源：未分配區塊 (UNASSIGNED -> SEAT)
            } else if (draggedStudentSeat === null) {
                const draggedStudentIndex = studentsWithoutSeat.findIndex(s => s.name === draggedStudentName);
                const targetStudentIndex = studentsWithSeat.findIndex(s => s.seat === targetStudentSeat);

                if (draggedStudentIndex !== -1) {
                    const draggedStudent = studentsWithoutSeat.splice(draggedStudentIndex, 1)[0];

                    if (targetStudentIndex !== -1) {
                        // 目標有學生: SWAP (學生從座位到未分配，未分配的學生到座位)
                        const targetStudent = studentsWithSeat.splice(targetStudentIndex, 1)[0];
                        targetStudent.seat = null; // Mark as unassigned
                        studentsWithoutSeat.push(targetStudent);

                        draggedStudent.seat = targetSeat;
                        studentsWithSeat.push(draggedStudent);
                    } else {
                        // 目標是空位: ASSIGN (未分配的學生到空位)
                        draggedStudent.seat = targetSeat;
                        studentsWithSeat.push(draggedStudent);
                    }
                }
            }
        }
        
        // 重新排序已分配座位的學生 (確保 generateSeatingChart 邏輯正確)
        studentsWithSeat.sort((a, b) => a.seat - b.seat);

        // 重新生成顯示內容
        generateSeatingChart();
        generateUnassignedStudents();
        updateStatistics();
    });
}

// --- 加分彈窗功能 ---
function openScorePopup(studentName) {
    selectedStudentName = studentName;
    document.getElementById('selectedStudent').textContent = studentName;
    const popup = document.getElementById('scorePopup');
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.querySelector('.score-popup').classList.add('active');
    }, 10);
}

function closeScorePopup() {
    const popup = document.getElementById('scorePopup');
    popup.querySelector('.score-popup').classList.remove('active');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 200);
}

// 輔助函式：正規化名稱，移除所有空白字符，確保匹配
function normalizeName(name) {
    if (typeof name !== 'string') return '';
    // 將所有空白字符 (包括全形空格、零寬度空格等) 替換為空
    return name.trim().replace(/\s/g, ''); 
}

function addScore(points) {
    // 尋找學生並更新分數。使用新的正規化函式
    const normalizedSelectedName = normalizeName(selectedStudentName);
    
    let student = studentsWithSeat.find(s => normalizeName(s.name) === normalizedSelectedName);
    if (!student) {
        student = studentsWithoutSeat.find(s => normalizeName(s.name) === normalizedSelectedName);
    }

    if (student) {
        student.score += points;
        updateScoreDisplay();
        updateTotalScore();
    }

    closeScorePopup();
}

// --- 統計和分數更新 ---
function updateScoreDisplay() {
    document.querySelectorAll('.score').forEach(scoreElement => {
        const card = scoreElement.closest('.seat-card');
        const nameElement = card.querySelector('.font-bold');

        if (nameElement) {
            // 從顯示卡片獲取名稱並正規化
            const name = normalizeName(nameElement.textContent);
            let student = studentsWithSeat.find(s => normalizeName(s.name) === name);
            if (!student) {
                student = studentsWithoutSeat.find(s => normalizeName(s.name) === name);
            }
            if (student) {
                scoreElement.textContent = student.score;
            }
        }
    });
}

function updateTotalScore() {
    const totalScore = [...studentsWithSeat, ...studentsWithoutSeat]
        .reduce((sum, student) => sum + student.score, 0);
    document.getElementById('totalScore').textContent = totalScore;
}

function updateStatistics() {
    const allocated = studentsWithSeat.length;
    const unallocated = studentsWithoutSeat.length;
    const total = allocated + unallocated;

    document.getElementById('totalCount').textContent = total;
    document.querySelector('.bg-blue-50 .text-2xl.font-bold').textContent = allocated;
    document.querySelector('.bg-red-50 .text-2xl.font-bold').textContent = unallocated;

    updateTotalScore();
}

// --- 初始化 ---
document.getElementById('scorePopup').addEventListener('click', (e) => {
    if (e.target.id === 'scorePopup') {
        closeScorePopup();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    generateSeatingChart();
    generateUnassignedStudents();
    updateStatistics();
});
