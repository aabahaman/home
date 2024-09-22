// Data for the charts
const collectionExpensesData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Total Collection',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [10000, 12000, 15000, 18000, 20000, 22000]
        },
        {
            label: 'Total Expenses',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [6000, 8000, 9000, 10000, 12000, 14000]
        }
    ]
};

const contributionData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Total Contribution',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            data: [2000, 5000, 7000, 9000, 11000, 13000]
        }
    ]
};

// Configurations for the charts
const configCollectionExpenses = {
    type: 'bar',
    data: collectionExpensesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configContribution = {
    type: 'bar',
    data: contributionData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the charts
window.onload = function() {
    const ctxCollectionExpenses = document.getElementById('collectionExpensesChart').getContext('2d');
    new Chart(ctxCollectionExpenses, configCollectionExpenses);

    const ctxContribution = document.getElementById('contributionChart').getContext('2d');
    new Chart(ctxContribution, configContribution);
};
