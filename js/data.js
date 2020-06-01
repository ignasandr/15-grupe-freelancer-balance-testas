const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = {
    1: 'Sausis',
    2: 'Vasaris',
    3: 'Kovas',
    4: 'Balandis',
    5: 'Gegužė',
    6: 'Birželis',
    7: 'Liepa',
    8: 'Rugpjūtis',
    9: 'Rugsėjis',
    10: 'Spalis',
    11: 'Lapkritis',
    12: 'Gruodis'
}

const tableContent = document.querySelector('.container .table .table-content');
const tableFooter = document.querySelector('.container .table .table-footer');

const minIncome = document.querySelector('#minIncome');
const maxIncome = document.querySelector('#maxIncome');
const minExp = document.querySelector('#minExp');
const maxExp = document.querySelector('#maxExp');



const addRows = () => {
    const sortedAccount = sort_by_key(account, 'month');

    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;
    
    sortedAccount.forEach(item => {
        let income = '-';
        let expense = '-';
        let balance = 0;
        if (item['income'] > 0 ){
            income = item['income'] + ' Eur';
            balance += item['income'];
            totalIncome += item['income'];
        }

        if (item['expense'] > 0 ){
            expense = item['expense'] + ' Eur';
            balance -= item['expense'];
            totalExpense -= item['expense'];
        }

        
        const HTML = `
        <div class="table-row">
            <div class="cell">${item['month']}</div>
            <div class="cell">${months[item['month']]}</div>
            <div class="cell">${income}</div>
            <div class="cell">${expense}</div>
            <div class="cell">${balance} Eur</div>
        </div>`;
    
        tableContent.insertAdjacentHTML('beforeend', HTML);

        totalBalance += balance;

    });

    const HTML = `
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${totalIncome} Eur</div>
        <div class="cell">${totalExpense} Eur</div>
        <div class="cell">${totalBalance} Eur</div>`
        ;

    tableFooter.insertAdjacentHTML('beforeend', HTML);

}

const addStats = () => {
    minIncome.textContent = 'Balandis';
    maxIncome.textContent = 'Rugsėjis';
    minExp.textContent = 'Lapkritis';
    maxExp.textContent = 'Rugsėjis';
}

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}


addRows();
addStats();