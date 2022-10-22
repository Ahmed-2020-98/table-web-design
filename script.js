
  var xhr =new XMLHttpRequest();
  xhr.open("GET","https://atec-web-design-table-default-rtdb.firebaseio.com/allStudents.json",true)
  xhr.onreadystatechange =function(){
    if(xhr.readyState==4){
      if(xhr.status ==200){
        // var data =xhr.response;
        var data = JSON.parse(this.response);
        // console.log(JSON.parse(data));
        console.log(data);
        var tableBodyAll=document.querySelector("#allStudentsTable>tbody");
        for(student in data){
          // console.log(data[student].Name);
          // console.log(student.Name);
          var row = `
          <tr>
            <td>0</td>
            <td>${data[student].Name}</td>
            <td>${data[student].Degree}</td>
            <td>0</td>
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
