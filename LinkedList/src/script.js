const addElementBtn = document.querySelector(".add-element");
const removeElementBtn = document.querySelector(".remove-element");
const addArrayBtn = document.querySelector(".add-array");
const removeLastBtn = document.querySelector(".remove-last");
const valueInput = document.querySelector("input");
const valueLength = document.querySelector(".length-list");
const pointerHead = document.querySelector(".pointer-head")

let linkedList = {};

function Render(listObj) {
	const llElement = document.getElementById("linkedList");
	let str = "";
	const keys = Object.getOwnPropertyNames(listObj);
	keys.forEach((element, index) => {
		str += `<div class="node-element">
		<div class="wrapper-node">
		<div class='value'>${listObj[element].value}</div>
		<div class='next'>${listObj[element].next}</div>
		</div>
		<div class="title-node">Node${element.substr(3)}</div>
		</div>
		<div class="arrow">&#8658</div>`;
	});
	llElement.innerHTML =
    str + `<div class="null">null</div>`;
}

function Getlength(listObj) {
	return Object.getOwnPropertyNames(listObj).length;
}

function AddElement(listObj, str, isRender = true) {
	if (listObj !== undefined && Getlength(listObj) > 0) {
		let length = Getlength(listObj);
		listObj["key" + length].next = "key" + (length + 1);
		listObj["key" + (length + 1)] = {
			value: str,
			next: null,
		};
	} else {
		listObj = {
			key1: { value: str, next: null },
		};
	}
	
	if (isRender === true) {
		Render(listObj);
	}
	return listObj;
}

function RemoveValue(listObj, val) { 
	for (const key in listObj) {
		if (Object.hasOwnProperty.call(listObj, key)) {
			const element = listObj[key];
			if (element['value'] === val && element['next'] === null) {
				RemoveLast(listObj);
			}
		}
	}
	const props = Object.getOwnPropertyNames(listObj);
	props.forEach(element => {
		if (listObj[element].value === val) {
			delete listObj[element];
		}
	});
	
	const length = Getlength(linkedList);
	let index = 1;
	const newProps = Object.getOwnPropertyNames(listObj);
	newProps.forEach(element => {
		const number = Number(element.replace('key',''));
		if (number !== index) {
			const tmp = listObj[element];
			// if (number === (length - 1)) {
			// 	listObj["key" + (length - 1)].next = null;
			// }
			if (index !== length) {
				tmp.next = 'key' + (index + 1);				
			}
			listObj['key' + index] = tmp;
			
		}

		if (number > index) {
			delete listObj[element];
		}
		index++;
	});

	Render(listObj);
	return listObj;
}

function RemoveLast(listObj) { 
	const length = Getlength(listObj);
	if (length === 1) {
		delete listObj["key" + length];
	} else {
		delete listObj['key' + length];
		listObj['key' + (length - 1)].next = null;
	}
	Render(listObj);
	return listObj;
}

function createHead() {
	const length = Getlength(linkedList);
	if (length === 0) {
		pointerHead.style.display = 'none';
	} else {
		pointerHead.style.display = "block";
	}
}

createHead();

addElementBtn.addEventListener("click", () => {
	if (valueInput.value === "") return;
	const value = valueInput.value;
	linkedList= AddElement(linkedList, value);
	const length = Getlength(linkedList);
	valueLength.innerHTML = length;
	createHead();
	console.log('[linkedList]', linkedList);
});

removeElementBtn.addEventListener("click", () => {
 if (valueInput.value === "") return;
  const value = valueInput.value;
  linkedList = RemoveValue(linkedList, value);
  const length = Getlength(linkedList);
  valueLength.innerHTML = length;
  createHead();
	const endNull = document.querySelector(".null");
	if (length === 0) {
		endNull.innerHTML = "";
	}
});

removeLastBtn.addEventListener("click", () => {
  linkedList = RemoveLast(linkedList);
  const length = Getlength(linkedList);
	valueLength.innerHTML = length;
	createHead();
	const endNull = document.querySelector(".null");
  if (length === 0) {
    endNull.innerHTML = "";
  }
	
});

addArrayBtn.addEventListener("click", () => {
  if (valueInput.value === "") return;
  const value = valueInput.value.split(',');
  linkedList = AddSubArray(linkedList, value);
  const length = Getlength(linkedList);
  valueLength.innerHTML = length;
  createHead();
});

function GetValueOfIndex(listObj, index) {
  for (const key in listObj) {
    if (key.includes(index)) {
    	return listObj[key]["value"];
    }
  }
}

function GetIndexForValue(listObj, value) {
	for (const key in listObj) {
    if (Object.hasOwnProperty.call(listObj, key)) {
      const element = listObj[key];
		if (element["value"] === value) {
        return key.substr(3);
      }
    }
  }
}

function AddSubArray(listObj, arr) {
	if (Array.isArray(arr)) {
		arr.forEach(element => {
			listObj = AddElement(listObj, element, false)
		})
	}

	Render(listObj);
	return listObj;
}


