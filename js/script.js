//for theme color change
function changeTheme()
{
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if(currentTheme == "light")
    {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
    if(currentTheme == "dark")
    {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
}
// modal 
function openEditModal(editButton)
{
    var productId = editButton.getAttribute('data-product-id');
    // alert(productId)
    var row = editButton.parentNode.parentNode; // Get the parent row of the clicked button
    var cells = row.getElementsByTagName('td'); // Get all <td> elements within the row
  
    // var rowData = [];
    // for (var i = 0; i < cells.length; i++) {
    //   rowData.push(cells[i].textContent); // Extract the text content of each <td> element and store in an array
    // }
  
    // alert(rowData); 
    var prID = cells[0].textContent;
    var prName = cells[1].textContent;
    var prCat = cells[2].textContent;
    var price = cells[3].textContent;
    var modal = document.getElementById('productModal'); // Replace 'myModal' with the ID of your modal element
    modal.style.display = 'block';
    document.getElementById('product_id').value = prID;
    document.getElementById('product_name').value = prName;
    document.getElementById('product_cat').value = prCat;
    document.getElementById('product_price').value = price;

    if(prName != '' && prCat != '' && price != '')
    {
        document.getElementById('progressBar').style.width = '100%';
    }
    else if((prName != '' && prCat != '' && price == '') || (prName != '' && prCat == '' && price != '') || (prName == '' && prCat != '' && price != ''))
    {
        document.getElementById('progressBar').style.width = '66.66%';
    }
    else if((prName == '' && prCat == '' && price != '') || (prName == '' && prCat != '' && price == '') || (prName != '' && prCat == '' && price == ''))
    {
        document.getElementById('progressBar').style.width = '33.33%';
    }
}
function closeModal() 
{
    var modal = document.getElementById('productModal');
    modal.style.display = 'none';
}
function submitProducts(event)
{
    var prName = document.getElementById('product_name').value;
    var prCategory = document.getElementById('product_cat').value;
    var price = document.getElementById('product_price').value;
    if(prName === '' || prCategory === '' || price === '')
    {
        document.getElementById('alertStyle').style.display = 'block';
        event.preventDefault();
    }
    
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    setTimeout(function() {
        spinner.style.display = 'none';
        closeModal();       
      }, 3000);
}
// generate chart 
function generateChart()
{
    const xValues = [50,60,70,80,90,100,110,120,130,140,150];
    const yValues = [7,8,8,9,9,9,10,11,14,14,15];
    
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
   
}
