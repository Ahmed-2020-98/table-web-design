
  var xhr =new XMLHttpRequest();
  xhr.open("GET","https://atec-web-design-table-default-rtdb.firebaseio.com/Group1.json",true)
  xhr.onreadystatechange =function(){
    if(xhr.readyState==4){
      if(xhr.status ==200){
        // var data =xhr.response;
        var data = JSON.parse(this.response);
        // console.log(JSON.parse(data));
        console.log(data);
        var tableBodyAll=document.querySelector("#StudentsTable1>tbody");
        for(student in data){
          // console.log(data[student].Name);
          // console.log(student.Name);
          var row = `
          <tr>
            <td></td>
            <td>${data[student].Star1>=1? `${data[student].Star1} &times; <i class="fa-solid fa-star star"></i>`:""}  </td>
            <td>${data[student].Name1}</td>
            <td>${data[student].Degree1>0?`${data[student].Degree1}`:""}</td>
            <td>${data[student].Total1}</td>
          </tr>
          `;

          tableBodyAll.innerHTML +=row;
          
        }

      }
      else{
        console.log("Unsuccessfully error when get data");
      }
      
    }
  }
  xhr.send();


