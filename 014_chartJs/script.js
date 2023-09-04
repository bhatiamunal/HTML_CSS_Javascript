
  const ctx = document.getElementById('myChart');
  const ctx_bar = document.getElementById('myChart_bar');
  const ctx_pie = document.getElementById('myChart_pie');
  const myChart_doughnut = document.getElementById('myChart_doughnut');
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  new Chart(ctx, {
    type: 'line',
    data: {
        
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
      
        {
            fill: {
                target: 'origin',
                below: 'rgb(255, 0, 0)',   // Area will be red above the origin
                 above: 'rgb(0, 0, 0)'    // And blue below the origin
              },
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },
      {
        fill: {
            target: 'origin',
            below: 'rgb(255, 0, 0)',   // Area will be red above the origin
            above: 'rgb(204,255,255)'    // And blue below the origin
          },
    label: '# of Votes1',
    data: [120, 190, 30, 50, 20, 30],
    borderWidth: 1
    } 
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctx_bar, {
    type: 'bar',
    data: {
        
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
      
        {
            fill: {
                target: 'origin',
                below: 'rgb(255, 0, 0)',   // Area will be red above the origin
                 above: 'rgb(0, 0, 0)'    // And blue below the origin
              },
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },
      {
        fill: {
            target: 'origin',
            below: 'rgb(255, 0, 0)',   // Area will be red above the origin
            above: 'rgb(204,255,255)'    // And blue below the origin
          },
    label: '# of Votes1',
    data: [120, 190, 30, 50, 20, 30],
    borderWidth: 1
    } 
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const data_pie = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
    }]
  };
  new Chart(myChart_doughnut, {
    type: 'doughnut',
    data: data,
  
  });
  new Chart(ctx_pie, {
    type: 'pie',
    data:data
  
  });