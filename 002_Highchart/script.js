function lineChart(){
    Highcharts.chart('container', {

        title: {
            text: 'U.S Solar Employment Growth',
            align: 'left'
        },
    
        subtitle: {
            text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
            align: 'left'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation & Developers',
            data: [43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610]
        }, {
            name: 'Manufacturing',
            data: [24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 30000, 16005, 19771, 20185, 24377,
                32147, 30912, 29243, 29213, 25663]
        }, {
            name: 'Operations & Maintenance',
            data: [null, null, null, null, null, null, null,
                null, 11164, 11218, 10077]
        }, {
            name: 'Other',
            data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                17300, 13053, 11906, 10073]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
    
}
function areaChart(){
    
Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: '.'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
            'target="_blank">FAS</a>'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
            1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
            28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
            26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
            23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
            21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
            10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
            5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
            3750, 3708, 3708
        ]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null,
            1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
            3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
            14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
            32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
            32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
            13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
            5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
            4310, 4495, 4477
        ]
    }]
});

}

function pieChart(){
    // Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'Edge',
            y: 14.77
        },  {
            name: 'Firefox',
            y: 4.86
        }, {
            name: 'Safari',
            y: 2.63
        }, {
            name: 'Internet Explorer', 
            y: 1.53
        },  {
            name: 'Opera',
            y: 1.40
        }, {
            name: 'Sogou Explorer',
            y: 0.84
        }, {
            name: 'QQ',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
});

}
function barchart(){
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region',
            align: 'left'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                'target="_blank">Wikipedia.org</a>',
            align: 'left'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe'],
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1990',
            data: [631, 727, 3202, 721]
        }, {
            name: 'Year 2000',
            data: [814, 841, 3714, 726]
        }, {
            name: 'Year 2018',
            data: [1276, 1007, 4561, 746]
        }]
    });
    
}
function column(){
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Corn vs wheat estimated production for 2020',
            align: 'left'
        },
        subtitle: {
            text:
                'Source: <a target="_blank" ' +
                'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
            align: 'left'
        },
        xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 metric tons (MT)'
            }
        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Corn',
                data: [406292, 260000, 107000, 68300, 27500, 14500]
            },
            {
                name: 'Wheat',
                data: [51086, 136000, 5500, 141000, 107180, 77000]
            }
        ]
    });
    
}
function cobinationChart(){
    Highcharts.chart('container', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Weather Data for Tokyo',
            align: 'left'
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            align: 'left'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
    
        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
    
        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} mb',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }
    
        }, {
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb'
            }
    
        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ' °C'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }
    });
    
}

function mapChart(){

    // Create a data value for each feature

(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    ).then(response => response.json());

    const data = [
        {
            'hc-key': 'ye',
            color: '#ffa500',
            info: 'Yemen is where coffee took off.'
        },
        {
            'hc-key': 'br',
            color: '#c0ffd5',
            info: 'Coffee came from La Reunion.'
        },
        {
            'hc-key': 'fr',
            color: '#c0ffd5',
            info: 'Coffee came from Java.'
        },
        {
            'hc-key': 'gb',
            color: '#c0ffd5',
            info: 'Coffee came from Java.'
        },
        {
            'hc-key': 'id',
            color: '#c0ffd5',
            info: 'Coffee came from Yemen.'
        },
        {
            'hc-key': 'nl',
            color: '#c0ffd5',
            info: 'Coffee came from Java.'
        },
        {
            'hc-key': 'gu',
            color: '#c0ffd5',
            info: 'Coffee came from France.'
        },
        {
            'hc-key': 're',
            color: '#c0ffd5',
            info: 'Coffee came from Yemen.'
        },
        {
            'hc-key': 'in',
            color: '#c0ffd5',
            info: 'Coffee came from Yemen.'
        }
    ];

    // Initialize the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'The history of the coffee bean ☕'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{point.key}</b>:<br/>',
            pointFormat: '{point.info}'
        },

        mapView: {
            fitToGeometry: {
                type: 'MultiPoint',
                coordinates: [
                    // Alaska west
                    [-164, 54],
                    // Greenland north
                    [-35, 84],
                    // New Zealand east
                    [179, -38],
                    // Chile south
                    [-68, -55]
                ]
            }
        },

        series: [
            {
                data,
                keys: ['hc-key', 'color', 'info'],
                name: 'Coffee'
            },
            {
                type: 'mapline',
                data: [
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [48.516388, 15.552727], // Yemen
                                [110.004444, -7.491667] // Java
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [48.516388, 15.552727], // Yemen
                                [55.5325, -21.114444] // La reunion
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [55.5325, -21.114444], // La reunion
                                [-43.2, -22.9] // Brazil
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [48.516388, 15.552727], // Yemen
                                [78, 21] // India
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [110.004444, -7.491667], // Java
                                [4.9, 52.366667] // Amsterdam
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [-3, 55], // UK
                                [-61.030556, 14.681944] // Antilles
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    },
                    {
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [2.352222, 48.856613], // Paris
                                [-53, 4] // Guyane
                            ]
                        },
                        className: 'animated-line',
                        color: '#666'
                    }
                ],
                lineWidth: 2,
                enableMouseTracking: false
            },
            {
                type: 'mappoint',
                color: '#333',
                dataLabels: {
                    format: '<b>{point.name}</b><br><span style="font-weight: normal; opacity: 0.5">{point.custom.arrival}</span>',
                    align: 'left',
                    verticalAlign: 'middle'
                },
                data: [
                    {
                        name: 'Yemen',
                        geometry: {
                            type: 'Point',
                            coordinates: [48.516388, 15.552727] // Yemen
                        },
                        custom: {
                            arrival: 1414
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Java',
                        geometry: {
                            type: 'Point',
                            coordinates: [110.004444, -7.491667] // Java
                        },
                        custom: {
                            arrival: 1696
                        }
                    },
                    {
                        name: 'La Reunion',
                        geometry: {
                            type: 'Point',
                            coordinates: [55.5325, -21.114444] // La reunion
                        },
                        custom: {
                            arrival: 1708
                        }
                    },
                    {
                        name: 'Brazil',
                        geometry: {
                            type: 'Point',
                            coordinates: [-43.2, -22.9] // Brazil
                        },
                        custom: {
                            arrival: 1770
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'India',
                        geometry: {
                            type: 'Point',
                            coordinates: [78, 21] // India
                        },
                        custom: {
                            arrival: 1670
                        }
                    },
                    {
                        name: 'Amsterdam',
                        geometry: {
                            type: 'Point',
                            coordinates: [4.9, 52.366667] // Amsterdam
                        },
                        custom: {
                            arrival: 1696
                        }
                    },
                    {
                        name: 'Antilles',
                        geometry: {
                            type: 'Point',
                            coordinates: [-61.030556, 14.681944] // Antilles
                        },
                        custom: {
                            arrival: 1714
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    },
                    {
                        name: 'Guyane',
                        geometry: {
                            type: 'Point',
                            coordinates: [-53, 4] // Guyane
                        },
                        custom: {
                            arrival: 1714
                        },
                        dataLabels: {
                            align: 'right'
                        }
                    }
                ],
                enableMouseTracking: false
            }
        ]
    });
})();

}