let diplomaOrCourse,
	workOrProject,
	titleOrTask,
	pathToDoc,
	specialty,
	PM,
	option1,
	option2,
	container,
	generateButton;
let PMOption = {
	//данный объект хранит инфу о названии мцк
	"08.02.01 Строительство и эксплуатация зданий и сооружений": {
		option1:
			"ПМ.01 Участие в проектировании зданий и сооружений МДК.01.01 Проектирование зданий и сооружений",
		option2:
			"ПМ.01 Участие в проектировании зданий и сооружений МДК.01.02 Проект производства работ",
	},
	"14.02.01 Атомные электрические станции и установки": {
		option1:
			"ПМ.02 Эксплуатация теплоэнергетического оборудования и технических систем атомных электростанций МДК.02.01 Основы эксплуатации теплоэнергетического оборудования и технических систем атомных",
		option2:
			"ПМ.02 Эксплуатация теплоэнергетического оборудования и технических систем атомных электростанций МДК.02.02 Теплоэнергетическое оборудование атомных электростанций",
	},
	"15.02.12 Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям)": {
		option1:
			"ПМ.03 Организация ремонтные, монтажные и наладочные работы по промышленному оборудованию МДК.03.01 Организация ремонтных работ по промышленному оборудованию",
		option2: "",
	},
	"08.02.09 Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий": {
		option1:
			"ПМ.03 Организация и выполнение работ по монтажу, наладке и эксплуатации электрических сетей МДК.03.03 Проектирование осветительных сетей промышленных и гражданских зданий",
		option2:
			"ПМ.02 Организация и выполнение работ по монтажу и наладке электрооборудования промышленных и гражданских зданий МДК.02.02 Внутреннее электроснабжение промышленных и гражданских зданий",
	},
	"15.02.08 Технология машиностроения": {
		option1:
			"ПМ.01 Разработка технологических процессов изготовления деталей машин МДК.01.01 Технологические процессы изготовления деталей машин",
		option2: "",
	},
	"22.02.06 Сварочное производство": {
		option1:
			"ПМ.02 Разработка технологических процессов и проектирование изделий МДК.02.02 Основы проектирования технологических процессов",
		option2: "",
	},
	"15.02.14 Оснащение средствами автоматизации технологических процессов и производств (по отраслям)": {
		option1:
			"ПМ.01 Разработка и компьютерное моделирование элементов систем автоматизации с учетом специфики технологических процессов МДК.01.02 Тестирование разработанной модели элементов систем автоматизации с формированием пакета технической документации",
		option2: "",
	},
	"23.02.07 Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей": {
		option1:
			"ПМ.01 Техническое обслуживание и ремонт автотранспортных средств МДК01.03 Технологические процессы технического обслуживания и ремонта автомобилей",
		option2:
			"ПМ.02 Организация процессов по техническому обслуживанию и ремонту автотранспортных средств МДК.02.02 Управление процессом технического обслуживания и ремонта автомобилей",
	},
	"38.02.01 Экономика и бухгалтерский учет (по отраслям)": {
		option1:
			"ПМ.04 Составление и использование бухгалтерской отчетности МДК.04.02 Технология составления бухгалтерской отчетности",
		option2:
			"ПМ.01 Документирование хозяйственных операций и ведение бухгалтерского учета имущества организации МДК.01.01 Практические основы бухгалтерского учета имущества организации",
	},
	"38.02.07 Банковское дело": {
		option1:
			"ПМ.01 Ведение расчетных операций МДК.01.01 Организация безналичных расчетов",
		option2:
			"ПМ.02 Осуществление кредитных операций МДК.02.01 Организация кредитной работы",
	},
	"40.02.01 Право и организация социального обеспечения": {
		option1:
			"ПМ.01 Обеспечение реализации прав граждан в сфере пенсионного обеспечения и социальной защиты МДК.01.01 Право социального обеспечения",
		option2:
			"ПМ.02 Организационное обеспечение деятельности учреждений социальной защиты населения и органов Пенсионного фонда Российской Федерации МДК.02.01 Организация работы органов и учреждений социальной защиты населения, органов Пенсионного фонда Российской Федерации (ПФР)",
	},
	"09.02.05 Прикладная информатика (по отраслям)": {
		option1:
			"ПМ.02 Разработка, внедрение и адаптация программного обеспечения отраслевой направленности МДК.02.01 Разработка, внедрение и адаптация программного обеспечения отраслевой направленности",
		option2:
			"ПМ.02 Разработка, внедрение и адаптация программного обеспечения отраслевой направленности МДК.02.02 Разработка информационных систем",
	},
};
let symbolQuantityObj = {
	"title_course_work.docm": {
		specialty: [59, 2],
		PM: [43, 4],
		projectName: [58, 4],
	},
	"title_course_project.docm": {
		specialty: [59, 2],
		PM: [43, 4],
		projectName: [58, 4],
	},
	"task_course_work.docm": {
		specialty: [59, 2],
		PM: [35, 4],
		projectName: [55, 4],
	},
	"task_course_project.docm": {
		specialty: [59, 2],
		PM: [35, 4],
		projectName: [46, 4],
	},
	"title_diploma_work.docm": {
		specialty: [59, 2],
		projectName: [55, 4],
	},
	"title_diploma_project.docm": {
		specialty: [59, 2],
		projectName: [55, 4],
	},
	"task_diploma_work.docm": {
		specialty: [59, 2],
		projectName: [48, 4],
	},
	"task_diploma_project.docm": {
		specialty: [59, 2],
		projectName: [48, 4],
	},
};
let userData = {};

container = document.getElementById("dop_settings_container");
appearContainer = document.getElementById("appearContainer");
generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
	fillUserData();
	generate();
});

document
	.getElementById("diplomaOrCourse")
	.addEventListener("change", function () {
		diplomaOrCourse = this.value;
		switchPathToDoc();
	});
document
	.getElementById("workOrProject")
	.addEventListener("change", function () {
		workOrProject = this.value;
		switchPathToDoc();
	});
document.getElementById("titleOrTask").addEventListener("change", function () {
	titleOrTask = this.value;
	switchPathToDoc();
});

specialty = document.getElementById("specialty");
specialty.addEventListener("change", function () {
	PM = document.getElementById("PM");
	option1 = document.getElementById("PMOption1");
	option2 = document.getElementById("PMOption2");

	option1.textContent = PMOption[this.value]["option1"];
	option1.value = option1.textContent;
	option2.textContent = PMOption[this.value]["option2"];
	option2.value = option2.textContent;
});

function switchPathToDoc() {
	//данная функция нужна для того, чтобы изменить путь к документу в зависимости от выбора пользователя
	pathToDoc = `${titleOrTask}_${diplomaOrCourse}_${workOrProject}.docm`;
	changeContainerHTML();
}

function changeContainerHTML() {
	//нужен для того, чтобы менять содержимое контайнера в зависимости от настроек
	container.innerHTML = "";
	switch (pathToDoc) {
		case "title_course_work.docm":
		case "title_course_project.docm":
			container.insertAdjacentHTML(
				"afterbegin",
				`<div class="titleCourseWorkProjectContainer">
			<p class="settings_title dop_settings_title">Заполни поля</p>
			<div class="choose">
				<p class="chooseTitle">Выбери ПМ</p>
				<select name="" id="PM">
					<option value="" id="PMOption1"></option>
					<option value="" id="PMOption2"></option>
				</select>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи тему</p>
				<input type="text" class = "userInput themeInput" id ="projectName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи группу</p>
				<input type="text" class = "userInput" id ="group"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи фамилию</p>
				<input type="text" class = "userInput" id ="lastName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  имя</p>
				<input type="text" class = "userInput" id ="firstName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  отчество</p>
				<input type="text"  class = "userInput" id ="patronymic"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  год</p>
				<input type="text"  class = "userInput" id ="year"/>
			</div>
		</div>`
			);
			showContainer();
			break;
		case "task_course_work.docm":
		case "task_course_project.docm":
			container.insertAdjacentHTML(
				"afterbegin",
				`<div class="titleCourseWorkProjectContainer">
			<p class="settings_title dop_settings_title">Заполни поля</p>
			<div class="choose">
				<select size="1" name=""  class = "userInput" id="studyForm">
					<option hidden="">Выбери форму обучения</option>
					<option value="очной">Очная</option>
					<option value="заочной">Заочная</option>
				</select>	
			</div>
			<div class="choose">
				<p class="chooseTitle">Выбери ПМ</p>
				<select name="" id="PM">
					<option value="" id="PMOption1"></option>
					<option value="" id="PMOption2"></option>
				</select>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи тему</p>
				<input type="text" class = "userInput themeInput" id ="projectName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи группу</p>
				<input type="text" class = "userInput" id ="group"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи фамилию</p>
				<input type="text" class = "userInput" id ="lastName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  имя</p>
				<input type="text" class = "userInput" id ="firstName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  отчество</p>
				<input type="text"  class = "userInput" id ="patronymic"/>
			</div>
		</div>`
			);
			showContainer();
			break;

		case "title_diploma_work.docm":
		case "title_diploma_project.docm":
			container.insertAdjacentHTML(
				"afterbegin",
				`<div class="titleCourseWorkProjectContainer">
			<p class="settings_title dop_settings_title">Заполни поля</p>
			<div class="choose">
				<p class="chooseTitle">Введи тему</p>
				<input type="text" class = "userInput themeInput" id ="projectName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи группу</p>
				<input type="text" class = "userInput" id ="group"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи фамилию</p>
				<input type="text" class = "userInput" id ="lastName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  имя</p>
				<input type="text" class = "userInput" id ="firstName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  отчество</p>
				<input type="text"  class = "userInput" id ="patronymic"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  год</p>
				<input type="text"  class = "userInput" id ="year"/>
			</div>
		</div>`
			);
			showContainer();
			break;
		case "task_diploma_project.docm":
		case "task_diploma_work.docm":
			container.insertAdjacentHTML(
				"afterbegin",
				`<div class="titleCourseWorkProjectContainer">
			<p class="settings_title dop_settings_title">Заполни поля</p>
			<div class="choose">
				<select size="1" name=""  class = "userInput" id="studyForm">
					<option hidden="">Выбери форму обучения</option>
					<option value="очной">Очная</option>
					<option value="заочной">Заочная</option>
				</select>	
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи тему</p>
				<input type="text" class = "userInput themeInput" id ="projectName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи группу</p>
				<input type="text" class = "userInput" id ="group"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи фамилию</p>
				<input type="text" class = "userInput" id ="lastName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  имя</p>
				<input type="text" class = "userInput" id ="firstName"/>
			</div>
			<div class="choose">
				<p class="chooseTitle">Введи  отчество</p>
				<input type="text"  class = "userInput" id ="patronymic"/>
			</div>
		</div>`
			);
			showContainer();
			break;

	}

}
function showContainer () {
	if (!appearContainer.classList.contains('appearContainer')) {
		appearContainer.classList.add('appearContainer')
	} else {
		appearContainer.classList.remove('appearContainer');
		setTimeout(`appearContainer.classList.add('appearContainer')`, 10);

	}
}

function fillUserData() {
	//userData.specialty = specialty.value;
	//userData.PM = PM.value;
	sliceUserData(specialty);
	sliceUserData(PM);
	let inputs = document.getElementsByClassName("userInput");
	for (let i = 0; i < inputs.length; i++) {
		sliceUserData(inputs[i]);
	}
	console.log(userData);
}
function sliceUserData(usInput) {
	//для специальности под первую строку 56 символов, под вторую 65
	//под пм 1 строка 40 символов, остальные 65
	//под тему 1 строка 43 символа, остальные 65
	//todo попытаться изменить, добавив второй цикл, для создания ключей в объекте и избегать повторений кода
	if (usInput == null) return;
	let i = 0;
	let j = 0;
	let symbolQuantity = 0;
	let stringQuantity = 0;

	if (
		usInput.id == "specialty" ||
		usInput.id == "PM" ||
		usInput.id == "projectName"
	) {
		symbolQuantity = symbolQuantityObj[pathToDoc][`${usInput.id}`][0];
		stringQuantity = symbolQuantityObj[pathToDoc][`${usInput.id}`][1];
	} else {
		symbolQuantity = 70;
		stringQuantity = 1;
	}

	/*if (pathToDoc.includes("title")) {
		if (usInput.id == "specialty") {
			symbolQuantity = 59;
			stringQuantity = 2;
		} else if (usInput.id == "PM") {
			symbolQuantity = 44;
			stringQuantity = 4;
		} else if (usInput.id == "projectName") {
			symbolQuantity = 43;
			stringQuantity = 4;
		} else {
			symbolQuantity = 70;
			stringQuantity = 1;
		}
	} else {
		if (usInput.id == "specialty") {
			symbolQuantity = 59;Ы
			stringQuantity = 2;
		} else if (usInput.id == "PM") {
			symbolQuantity = 32;
			stringQuantity = 4;
		} else if (usInput.id == "projectName") {
			symbolQuantity = 47;
			stringQuantity = 4;
		} else {
			symbolQuantity = 70;
			stringQuantity = 1;
		}
	}
*/
	let arr = usInput.value.split(" ");
	let stringPart = "";
	for (i; i < stringQuantity; i++) {
		userData[`${usInput.id}${i}`] = "";
		for (j; j < arr.length; j++) {
			stringPart += `${arr[j]} `;
			if (stringPart.length > symbolQuantity) {
				symbolQuantity = 70;
				stringPart = stringPart.trim();
				let lastIndex = stringPart.lastIndexOf(" ");
				stringPart = stringPart.substring(0, lastIndex);
				userData[`${usInput.id}${i}`] = stringPart;
				stringPart = "";
				//j--;
				break;
			}
			userData[`${usInput.id}${i}`] = stringPart;
		}
	}

	/*if (usInput.value.length <= 56) {
			userData.specialty0 = usInput.value;
			userData.specialty1 = "";
		} else {
			let arr = specialty.value.split(" ");
			let part = "";
			for (let i = 0; i < arr.length; i++) {
				part += `${arr[i]} `;
				if (part.length > 56) {
					part = part.trim();
					let lastIndex = part.lastIndexOf(" ");
					part = part.substring(0, lastIndex);
					userData.specialty0 = part;
					part = "";
					i--;
				}
			}
			userData.specialty1 = part;
		}*/
}
function loadFile(url, callback) {
	PizZipUtils.getBinaryContent(url, callback);
}
function generate() {
	loadFile(pathToDoc, function (error, content) {
		if (error) {
			throw error;
		}
		var zip = new PizZip(content);
		var doc;
		try {
			doc = new window.docxtemplater(zip);
		} catch (error) {
			// Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
			errorHandler(error);
		}

		doc.setData(userData);
		try {
			// render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
			doc.render();
		} catch (error) {
			// Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
			errorHandler(error);
		}

		var out = doc.getZip().generate({
			type: "blob",
			mimeType:
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		}); //Output the document using Data-URI
		saveAs(out, pathToDoc);
	});
}
