
    function clearText(){
    document.getElementById('hey').value = '';
    }

function switchText(){
          let obj1 = document.getElementById("left");
          let obj2 = document.getElementById("right");

          let temp = obj1.value;
          obj1.value = obj2.value;
          obj2.value = temp;
        }
