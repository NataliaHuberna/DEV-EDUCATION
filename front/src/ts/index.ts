import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');
import { TData, TDataItems } from './types';
import { domElements } from './domElements';

const getData = async (urlParams: string): Promise<void> => {
    const response = await axios.get(`http://localhost:3001/?` + urlParams);
    const mapData = (data) => {
        const dataToRender = mapDataForDiagram(data.results);
        renderChart(dataToRender);
    }
    mapData(response.data);
}

domElements.filter.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();
    getInfo();
}
)  

const getInfo = (): void => {
    let urlParams: string = '';

    const formData = new FormData(<HTMLFormElement>domElements.filter);            
    const minCosntant: FormDataEntryValue = formData.get('minSalary');
    if (minCosntant){
        urlParams += `salary_min=${minCosntant}&`;
    }

    const maxSalary: FormDataEntryValue = formData.get('maxSalary');
    if (maxSalary){
        urlParams += `salary_max=${maxSalary}&`;
    }

    const isFullTime: FormDataEntryValue = formData.get('isFullTime');
    if (isFullTime) {
        urlParams += 'full_time=1&'
    } else {
        urlParams += 'part_time=1&'
    }

    const isContract: FormDataEntryValue = formData.get('isContract');
    if (isContract) {
        urlParams += 'contract=1&'
    } else {
        urlParams += 'permanent=1&'
    }

    getData(urlParams);
}

const createAvarageSalary = (groupedSalaries) => {
    const properties: Array<string> = Object.getOwnPropertyNames(groupedSalaries)
    let avarageSalary = [];
    properties.forEach(property => {
        const item = groupedSalaries[property];
        let salaryTotal = 0;
        item.forEach(s => {
            salaryTotal += s.salary_min;
        })

        avarageSalary.push({
            category_tag: property,
            category_label: item[0].category_label,
            avarage_salary: Math.round(salaryTotal / item.length)
        })
    });
    return avarageSalary;
}

const mapDataForDiagram = (results) => {
    const salaries = results.map(x => {
        return {
            salary_min: x.salary_min,
            category_tag: x.category.tag,
            category_label: x.category.label
        };
    });

    const groupedSalaries = groupBy(salaries, 'category_tag');

    return createAvarageSalary(groupedSalaries);
}

const groupBy = (objectArray, property) => {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
        acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const renderChart = (dataToRender: Array<TData>): void => {
    const dataLabels = dataToRender.map(x => x.category_label);
    const dataItems:Array<TDataItems> = dataToRender.map(x => {
        return {
            x: x.category_label,
            y: x.avarage_salary
        };
    });
    chart.data.labels = dataLabels;
    chart.data.datasets[0].data = dataItems;
    chart.update(); 
}

let chart = new Chart(document.getElementById("myChart").getContext('2d'), {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            backgroundColor: ["orange"],
            data: []
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Salary overview'
            }
        }
    }
});

window.addEventListener('load', getInfo);

