function drawAll(){
    /*************************************************************************/
    chart5 = new Chart(document.getElementById('total-projects-dev').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ["Division PED", "Division Production", "Division Laboratoires", "Division Association", "Division Forage", "Division Exploration"],
            datasets: [
                {
                    label: "Nombre total des projets",
                    data: [nProjPED, nProjPr, nProjLab, nProjAst, nProjFor, nProjExp],
                    backgroundColor: [b1, b2, b3, b4, b5, b6],
                },              
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 7/3,
            plugins: {
                legend: {
                    display: false,
                }
            },

            scales: {
                x: {
                    min: 0,
                    max: Math.max(nProjPED, nProjPr, nProjLab, nProjAst, nProjFor, nProjExp) + 1,
                    display: false,
                  },
                y: {
                    grid: {
                        display: false
                    }
                }
            }

        }
    });
    /******************************************************************************/
    chart21 = new Chart(document.getElementById('total-projects-1').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ["PED", "Pr", "Lab", "Ast", "For", "Exp"],
            datasets: [
                {
                    label: "Nombre des projets en attente",
                    data: [nProjPED1, nProjPr1, nProjLab1, nProjAst1, nProjFor1, nProjExp1],
                  backgroundColor: [b1, b2, b3, b4, b5, b6],
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
    /******************************************************************************/
    chart22 = new Chart(document.getElementById('total-projects-2').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ["PED", "Pr", "Lab", "Ast", "For", "Exp"],
            datasets: [
                {
                    label: "Nombre des projets en cours",
                    data: [nProjPED2, nProjPr2, nProjLab2, nProjAst2, nProjFor2, nProjExp2],
                  backgroundColor: [b1, b2, b3, b4, b5, b6],
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
    /******************************************************************************/
    chart23 = new Chart(document.getElementById('total-projects-3').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ["PED", "Pr", "Lab", "Ast", "For", "Exp"],
            datasets: [
                {
                    label: "Nombre des projets réalisés",
                    data: [nProjPED3, nProjPr3, nProjLab3, nProjAst3, nProjFor3, nProjExp3],
                  backgroundColor: [b1, b2, b3, b4, b5, b6],
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
    /******************************************************************************/
    chart24 = new Chart(document.getElementById('total-projects-4').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ["PED", "Pr", "Lab", "Ast", "For", "Exp"],
            datasets: [
                {
                    label: "Nombre des projets annulés",
                    data: [nProjPED4, nProjPr4, nProjLab4, nProjAst4, nProjFor4, nProjExp4],
                  backgroundColor: [b1, b2, b3, b4, b5, b6],
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
    /***************************All projects cumulative**;************************************/
    chart1 = new Chart(document.getElementById('total-projects').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });

    chart12 = new Chart(document.getElementById('total-projects1').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });

    chart13 = new Chart(document.getElementById('total-projects2').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });

    chart14 = new Chart(document.getElementById('total-projects3').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });

    chart15 = new Chart(document.getElementById('total-projects4').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });

    chart16 = new Chart(document.getElementById('total-projects5').getContext('2d'), {
        type: 'line',
        data: {
            labels: nProjYear[0],
            datasets: [
                {
                    label: "Nombre des projets R&D implimentés",
                    backgroundColor: principal,
                    borderColor: black,
                    data: nProjYear[5],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                },      
                {
                    label: "Nombre total des projets R&D",
                    backgroundColor: secondary,
                    borderColor: black,
                    data: nProjYear[4],
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 1,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            color: black,
            plugins: {               
                legend: {
                  labels: {
                    usePointStyle: true,
                  }
                }
            }
            
        }
    });




    /***************************All projects devisions***********************************/
    const divs = document.querySelectorAll('.projectdiv');
    divs.forEach(div => {
        div.remove();
    });
    var config1 = []
    for (let i = 0; i < projectSheetList.length; i++) {
        for (let j = 0; j < projectSheetList[i].client.length; j++) {
            var div = document.createElement("div");
            var canvas = document.createElement("canvas");
            var title = document.createElement("span");
            div.className = "projectdiv";
            title.innerHTML = projectSheetList[i].projectAnalyticalCode;
            document.getElementById("projects-ped").appendChild(div);
            div.appendChild(canvas);
            div.appendChild(title);
            config1[i] = {
                type: 'doughnut',
                data: {
                    labels: ["", ""],
                    datasets: [
                        {
                            label: "",
                            data: [kpi1[i], 100 - kpi1[i]],
                            backgroundColor: [b1, white],
                            borderColor: black,
                            borderWidth: 0.5
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false,
                        }
                    }
                }
            };
            chartProject[i] = new Chart(canvas.getContext('2d'), config1[i]); 
        }    
    }
    /////////////////////////////////////////////////////////////
   /* document.querySelector(".uil.full-screen").addEventListener("click", ()=>{
        const divsFull = document.querySelectorAll('.projectdivFull');
        divsFull.forEach(div => {
            div.remove();
        });
        document.querySelector("#full-screen").style.display = "block";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
        **********
        document.querySelector(".test2").addEventListener("click", ()=>{
                document.documentElement.style.overflow = 'scroll';
                document.body.scroll = "yes";
        });
        ***************
        for (let i = 0; i < chartProject.length; i++) {
            var div = document.createElement("div");
            var canvas = document.createElement("canvas");
            var title = document.createElement("span");
            div.className = "projectdivFull";
            title.innerHTML = projectSheetList[i].projectAnalyticalCode;
            document.getElementById("all-divisions-full").appendChild(div);
            div.appendChild(canvas);
            div.appendChild(title);
            chartProject[i] = new Chart(canvas.getContext('2d'), config1[i]);     
        }
    });*/
    /***************************All projects DP***********************************
    for (let i = 1; i <= nProjectsPr; i++) {
        var div = document.createElement("div");
        var canvas = document.createElement("canvas");
        var title = document.createElement("span");
        div.className = "projectdiv";
        title.innerHTML = projectNamePr[i - 1];
        document.getElementById("projects-pr").appendChild(div);
        div.appendChild(canvas);
        div.appendChild(title);
        chartPr[i] = new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ["", ""],
                datasets: [
                    {
                        label: projectNamePr[i - 1],
                        data: [projectProgressPr[i - 1], 100 - projectProgressPr[i - 1]],
                        backgroundColor: [b2, white],
                        borderColor: black,
                        borderWidth: 0.5
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });
    }
    /***************************All projects For***********************************
    for (let i = 1; i <= nProjectsFor; i++) {
        var div = document.createElement("div");
        var canvas = document.createElement("canvas");
        var title = document.createElement("span");
        div.className = "projectdiv";
        title.innerHTML = projectNameFor[i - 1];
        document.getElementById("projects-for").appendChild(div);
        div.appendChild(canvas);
        div.appendChild(title);
        chartFor[i] = new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ["", ""],
                datasets: [
                    {
                        label: projectNameFor[i - 1],
                        data: [projectProgressFor[i - 1], 100 - projectProgressFor[i - 1]],
                        backgroundColor: [b3, white],
                        borderColor: black,
                        borderWidth: 0.5
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });
    }
    /***************************All projects Exp***********************************
    for (let i = 1; i <= nProjectsExp; i++) {
        var div = document.createElement("div");
        var canvas = document.createElement("canvas");
        var title = document.createElement("span");
        div.className = "projectdiv";
        title.innerHTML = projectNameExp[i - 1];
        document.getElementById("projects-exp").appendChild(div);
        div.appendChild(canvas);
        div.appendChild(title);
        chartExp[i] = new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ["", ""],
                datasets: [
                    {
                        label: projectNameExp[i - 1],
                        data: [projectProgressExp[i - 1], 100 - projectProgressExp[i - 1]],
                        backgroundColor: [b4, white],
                        borderColor: black,
                        borderWidth: 0.5
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false,
                    }
                }
            }
        });
    }
        /***************************All projects Lab***********************************
        for (let i = 1; i <= nProjectsLab; i++) {
            var div = document.createElement("div");
            var canvas = document.createElement("canvas");
            var title = document.createElement("span");
            div.className = "projectdiv";
            title.innerHTML = projectNamePED[i - 1];
            document.getElementById("projects-lab").appendChild(div);
            div.appendChild(canvas);
            div.appendChild(title);
            chartLab[i] = new Chart(canvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ["", ""],
                    datasets: [
                        {
                            label: projectNameLab[i - 1],
                            data: [projectProgressLab[i - 1], 100 - projectProgressLab[i - 1]],
                            backgroundColor: [b5, white],
                            borderColor: black,
                            borderWidth: 0.5
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false,
                        }
                    }
                }
            });
        }
    //////////////////////////////////////////////////////////////////////////////////////////
    

    /***************************All projects by devision***********************************/

    /*************************** ALL project state *************************************
    chart3 = new Chart(document.getElementById('total-projects-state').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ["Projet 1", "Projet 2", "Projet 3", "Projet 4", "Projet 5", "Projet 6", "Projet 7"],
            datasets: [
                {
                    label: "Avancement 1",
                    data: [65, 40, 35, 40, 56, 23, 90],
                    backgroundColor: [b1, b1, b1, b1, b1, b1, b1],
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 1,
                    borderRadius: 10,
                },
                {
                    label: "Avancement 2",
                    data: [60, 90, 10, 34, 67, 21, 55],
                    backgroundColor: [b2, b2, b2, b2, b2, b2, b2],
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 1,
                    borderRadius: 10,                
                },    
                {
                    label: "Avancement 3",
                    data: [56, 45, 17, 56, 55, 41, 85],
                    backgroundColor: [b3, b3, b3, b3, b3, b3, b3],
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 1,
                    borderRadius: 10,                },                
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3,
        }
    });
    /*************************** project state **************************************
    var data1 = [70, 30], data2 = [60, 30], data3 = [50, 30]
    var config = {
        type: 'doughnut',
        data: {
            labels: ['Réalisées', 'Restantes'],
            datasets: [{
                    label: 'Avancement A',
                    data: data1,
                    backgroundColor: [b1, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 0
                },
                {
                    label: 'Avancement B',
                    data: data2,
                    backgroundColor: [b2, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 0
                },
                {
                    label: 'Avencement C',
                    data: data3,
                    backgroundColor: [b3, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 0
                }      
            ]
        },
        options: {
            cutout: '85%',
            plugins:{
                legend:{
                    onClick: (evt, legendItem, legend) => {
                        const datasets = legend.legendItems.map((dataset, index)=> {
                            return dataset.text
                        })
                        const index = datasets.indexOf(legendItem.text);
                        if(legend.chart.isDatasetVisible(index) === true){
                            legend.chart.hide(index)
                        } else {
                            legend.chart.show(index)
                        }
                    },
                    labels:{
                        generateLabels: (chart) => {
                            let visibility = [];
                            for (let i = 0; i < chart.data.datasets.length; i++){
                                if(chart.isDatasetVisible(i) === false){
                                    visibility.push(true)
                                } else {
                                    visibility.push(false)
                                }
                            }
                            return chart.data.datasets.map((dataset, index) => ({
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.borderColor,
                                hidden: visibility[index]
                            })
                            )
                        }
                    }
                }
            }
        }
    };
    chart4 = new Chart(document.getElementById('project1'), config);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
    config = {
        type: 'doughnut',
        data: {
            labels: ['Réalisées', 'Restantes'],
            datasets: [{
                    label: 'Avancement A',
                    data: data1,
                    backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Avancement B',
                    data: data2,
                    backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Avencement C',
                    data: data3,
                    backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                }      
            ]
        },
        options: {
            cutout: '85%',
            plugins:{
                legend:{
                    onClick: (evt, legendItem, legend) => {
                        const datasets = legend.legendItems.map((dataset, index)=> {
                            return dataset.text
                        })
                        const index = datasets.indexOf(legendItem.text);
                        if(legend.chart.isDatasetVisible(index) === true){
                            legend.chart.hide(index)
                        } else {
                            legend.chart.show(index)
                        }
                    },
                    labels:{
                        generateLabels: (chart) => {
                            let visibility = [];
                            for (let i = 0; i < chart.data.datasets.length; i++){
                                if(chart.isDatasetVisible(i) === false){
                                    visibility.push(true)
                                } else {
                                    visibility.push(false)
                                }
                            }
                            return chart.data.datasets.map((dataset, index) => ({
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.borderColor,
                                hidden: visibility[index]
                            })
                            )
                        }
                    }
                }
            }
        }
    };
    chart5 = new Chart(document.getElementById('project2'), config);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
    config = {
        type: 'doughnut',
        data: {
            labels: ['Réalisées', 'Restantes'],
            datasets: [{
                    label: 'Avancement A',
                    data: data1,
                    backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Avancement B',
                    data: data2,
                    backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Avencement C',
                    data: data3,
                    backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 1
                }      
            ]
        },
        options: {
            cutout: '85%',
            plugins:{
                legend:{
                    onClick: (evt, legendItem, legend) => {
                        const datasets = legend.legendItems.map((dataset, index)=> {
                            return dataset.text
                        })
                        const index = datasets.indexOf(legendItem.text);
                        if(legend.chart.isDatasetVisible(index) === true){
                            legend.chart.hide(index)
                        } else {
                            legend.chart.show(index)
                        }
                    },
                    labels:{
                        generateLabels: (chart) => {
                            let visibility = [];
                            for (let i = 0; i < chart.data.datasets.length; i++){
                                if(chart.isDatasetVisible(i) === false){
                                    visibility.push(true)
                                } else {
                                    visibility.push(false)
                                }
                            }
                            return chart.data.datasets.map((dataset, index) => ({
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.borderColor,
                                hidden: visibility[index]
                            })
                            )
                        }
                    }
                }
            }
        }
    };
    chart6 = new Chart(document.getElementById('project3'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [5, 30], data2 = [10, 30], data3 = [8, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart7 = new Chart(document.getElementById('project4'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart8 = new Chart(document.getElementById('project5'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart9 = new Chart(document.getElementById('project6'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart10 = new Chart(document.getElementById('project7'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart11 = new Chart(document.getElementById('project8'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [20, 30], data2 = [50, 30], data3 = [70, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart12 = new Chart(document.getElementById('project9'), config);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        data1 = [5, 30], data2 = [10, 30], data3 = [8, 30]
        config = {
            type: 'doughnut',
            data: {
                labels: ['Réalisées', 'Restantes'],
                datasets: [{
                        label: 'Avancement A',
                        data: data1,
                        backgroundColor: [th_2, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avancement B',
                        data: data2,
                        backgroundColor: [th_4, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Avencement C',
                        data: data3,
                        backgroundColor: [th_6, 'rgba(200, 200, 200, 0.4)'],
                        borderColor: 'rgba(200, 200, 200, 1)',
                        borderWidth: 1
                    }      
                ]
            },
            options: {
                cutout: '85%',
                plugins:{
                    legend:{
                        onClick: (evt, legendItem, legend) => {
                            const datasets = legend.legendItems.map((dataset, index)=> {
                                return dataset.text
                            })
                            const index = datasets.indexOf(legendItem.text);
                            if(legend.chart.isDatasetVisible(index) === true){
                                legend.chart.hide(index)
                            } else {
                                legend.chart.show(index)
                            }
                        },
                        labels:{
                            generateLabels: (chart) => {
                                let visibility = [];
                                for (let i = 0; i < chart.data.datasets.length; i++){
                                    if(chart.isDatasetVisible(i) === false){
                                        visibility.push(true)
                                    } else {
                                        visibility.push(false)
                                    }
                                }
                                return chart.data.datasets.map((dataset, index) => ({
                                    text: dataset.label,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: dataset.borderColor,
                                    hidden: visibility[index]
                                })
                                )
                            }
                        }
                    }
                }
            }
        };
    chart13 = new Chart(document.getElementById('project10'), config);*/






chart3 = new Chart(document.getElementById('project-state').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Jan 2013", "Fev 2013", "Mar 2013", "Avr 2013", "Mai 2013", "Jun 3013", "Jui 2013", "Aut 2013", "Sep 3013", "Oct 2013", "Nov 2013"],
        datasets: [
            {
                label: "Avancement 1",
                data: [5, 10, 12, 20, 28, 40, 42, 48, 55, 60, 65],
                backgroundColor: [b1],
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 1,
                borderRadius: 10,
            },
            {
                label: "Avancement 2",
                data: [4, 9, 15, 21, 25, 35, 45, 50, 55, 58, 67],
                backgroundColor: [b2],
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 1,
                borderRadius: 10,                
            },    
            {
                label: "Avancement 3",
                data: [7, 11, 14, 21, 25, 36, 44, 45, 57, 62, 69],
                backgroundColor: [b3],
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 1,
                borderRadius: 10,                },                
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 3,
    }
});

}