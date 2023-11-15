const getAllUser =  (req, res) => {
    const data = {
        id : '007',
        Nama : "Wayer Raga",
        Email : "wayerraga1717@gmail.com",
        Address : "Malang"
    }
    res.json({
        massage: 'GET All User succsess',
        data : data
    })
};

const CreateNewUser =  (req, res) => {
    console.log(req.body);
    res.json({  
        massage: 'Create New Users succes',
        data: req.body
    })
};

const updateUser = (req, res) =>{
    const {idUser} = req.params;    
    console.log('idUser: ', idUser);
    res.json({
        message: 'UPDATE User Success',
        data: req.body,
    })
}

module.exports = {
    getAllUser,
    CreateNewUser,
    updateUser,
};