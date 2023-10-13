
    const data = document.querySelector('#text');
    const add = document.querySelector('.add');
    const list = document.querySelector('.list');
  
    add.addEventListener('click', function () {
      if (data.value === '') {
        alert("WRITE SOMETHING BEFORE ADDING.........");
      } else {
        let li = document.createElement('li');
        li.innerHTML = data.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        data.value = "";
  
        // Add the click event listener to the li element, not the span
        li.addEventListener('click', function (e) {
          
            e.target.classList.toggle('checked');
            if(e.target.classList.contains('checked')){
                list.append(li);
            }
        });
       
        list.insertBefore(li, list.childNodes[0]);
      }
    });
  
    // Add a separate event listener to delete checked items
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;
        li.remove();
      }
    });

  


