const container = document.getElementById('container')


function addSelectElementHandler({optionName=[]}){

    this.optionName = optionName

    const selectElement = document.createElement('div')
    const selectShow = document.createElement('div')
    const selectOptions = document.createElement('div')


    selectElement.className = 'select_element'

    selectShow.className = 'select_show'
    selectShow.innerText = 'Pending'

    selectOptions.className = 'select_options'


    selectShow.addEventListener('click',function (){
        if (selectOptions.style.display === 'block'){
            selectOptions.style.display = 'none'
        }else{
            selectOptions.style.display = 'block'
        }

    })

    this.optionName.map(elem=>{
        const selectSingleOption = document.createElement('div')

        selectSingleOption.className = 'single_option'
        selectSingleOption.innerText = `${elem.id}. ${elem.name}`

        selectSingleOption.addEventListener('click',function(){
            if (selectShow.innerText!==`${elem.id}. ${elem.name}`) {

                selectShow.innerText = `${elem.id}. ${elem.name}`
                selectOptions.style.display = 'none'
            }
        })

        selectOptions.appendChild(selectSingleOption)
    })

    selectElement.append(selectShow,selectOptions)

    container.appendChild(selectElement)
}


addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})
addSelectElementHandler({
    optionName:[
        {
            id:1,
            name:'JavaScript'
        },
        {
            id:2,
            name:'JavaScript'
        },
        {
            id:3,
            name:'JavaScript'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'JavaScript'
        }
    ]
})