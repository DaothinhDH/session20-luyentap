let thead = [
    {
        id: 1,
        name: "nguyen",
    },
    {
        id: 2,
        name: "nguyen",
    },
    {
        id: 3,
        name: "nguyen",
    },
    {
        id: 4,
        name: "nguyen",
    },
    {
        id: 5,
        name: "nguyen",
    },
    {
        id: 6,
        name: "nguyen"
    },
]


/////   thay doi bang trong html
function newThead() {
    let string = "";
    for (let i = 0; i < thead.length; i++) {
        // let element = thead[i]
        string += ` <tr>
                <td>${i + 1}</td>
                <td>${thead[i].name}</td>
                <td>
                    <button >edit</button>
                </td>
                <td>
                    <button onclick="deleteCaegory(${thead[i].id})">delete</button>
                </td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = string;
}
newThead()

// id tu tang
function idtutang() {
    let idmax = 0;
    for (i = 0; i < thead.length; i++) {
        if (idmax < thead[i]) {
            thead[i] = idmax;
        }
    }
    return idmax++;
}


/////  chuc nang them moi mot cai...
function addProduct() {
    let newtext = document.getElementById("text").value;
    let newid = idtutang();
    let newTheadaaa = {
        id: newid,
        name: newtext
    }
    thead.push(newTheadaaa)
    document.getElementById("text").value = "";
    newThead();  // sau khi them moi xong, thi cap nhap lai giao dien
}
addProduct()


// chuc nang xoa
function deleteCaegory(iddelete) {
    if (confirm("ban co chac chan muon xoa khong")) {
        // lay ra duoc id can xoa
        let indexDelete = thead.findIndex((editcatagory) => editcatagory.id == iddelete)
        // xóa theo splice
        thead.splice(indexDelete, 1)
        newThead();
    }
}

// chuc nang sua  (update)
function editcategory() {
    // lấy ra id
    let indexedit = thead.findIndex((dog) => dog.id == id);
    // lấy đối tượng cần sửa
    let categoryEdit = thead[indexedit]
}