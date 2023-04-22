const poligons = document.querySelectorAll('.trello__body>div');
let trelloTask = document.querySelector('.trello__task');
const trelloBtn = document.querySelector('.trello__btn');
const trelloInp = document.querySelector('.trello__inp');
const trelloSprint = document.querySelector('.trello__sprint');


let newTrelloTask;

trelloTask.addEventListener('dragstart',function(e){
			newTrelloTask = e.target; // this
		})
const trelloRemoveTaskBtn = document.querySelector('.trello__removeTaskBtn')
poligons.forEach(function(el){
	el.addEventListener('dragover', allowDrop);
	el.addEventListener('drop',dropTask);
})

trelloRemoveTaskBtn.addEventListener('click',removeTask);
trelloBtn.addEventListener('click',addTask);


function addTask(){
	if(trelloInp.value){
		const trelloTask = document.createElement('div');
		trelloTask.addEventListener('dragstart',function(e){
			console.log(e);
			newTrelloTask = e.target; // this
		})
		trelloTask.classList.add('trello__task');
		trelloTask.setAttribute('draggable', 'true');
		trelloTask.innerText = trelloInp.value;
		const trelloRemoveTaskBtn = document.createElement('span');
		trelloRemoveTaskBtn.innerText = 'x';
		trelloTask.setAttribute('contenteditable', 'true')
		trelloRemoveTaskBtn.classList.add('trello__removeTaskBtn');
		trelloTask.appendChild(trelloRemoveTaskBtn);
		trelloRemoveTaskBtn.addEventListener('click',removeTask)

		trelloSprint.appendChild(trelloTask);
		trelloInp.value = '';

	}

}

function removeTask(){
	this.parentElement.remove();
}

function allowDrop(e){
	e.preventDefault();
}

function dropTask(){
	this.appendChild(newTrelloTask)
}

// Отримати всі елементи з класом .trello__assignee-select
const assigneeSelects = document.querySelectorAll('.trello__assignee-select');

// Додати обробник події до кожного елементу .trello__assignee-select
assigneeSelects.forEach((assigneeSelect) => {
  assigneeSelect.addEventListener('change', function () {
    const assignee = this.value;
    const task = this.closest('.trello__task1');
    task.dataset.assignee = assignee;
  });
});

function addTask() {
  if (trelloInp.value) {
    const trelloTask1 = document.createElement('div');
    trelloTask1.addEventListener('dragstart', function (e) {
      newTrelloTask1 = e.target; // this
    });
    trelloTask1.classList.add('trello__task');
    trelloTask1.setAttribute('draggable', 'true');
    trelloTask1.innerText = trelloInp.value;
    const trelloRemoveTaskBtn1 = document.createElement('span');
    trelloRemoveTaskBtn1.innerText = 'x';
    trelloTask1.setAttribute('contenteditable', 'true');
    trelloTask1.dataset.assignee = ''; // додати нове поле для зберігання інформації про виконавця
    trelloRemoveTaskBtn1.classList.add('trello__removeTaskBtn1');
    trelloTask1.appendChild(trelloRemoveTaskBtn1);
    const assigneeSelect = document.createElement('select'); // додати елемент для вибору виконавця
    assigneeSelect.classList.add('trello__assignee-select');
    assigneeSelect.innerHTML = `
      <option value="">None</option>
      <option value="Name1">Name1</option>
      <option value="Name2">Name2</option>
      <option value="Name3">Name3</option>
    `;
    const assigneeLabel = document.createElement('span'); // д
