import axios from '../lib/axios'
export const submitFormCustom = async (editorMode,data,model,callback) => {
      var id = editorMode == 'create' ? '' : data.id
      var config = {
        method: editorMode == 'create' ? 'post' : 'put',
        url: '/'+model+'/'+editorMode+'/'+id,
        headers: { 
          'accept': 'application/json', 
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
          'Content-Type': 'application/json'
        },
        data : data
      };
    axios(config).then(function (response) {callback()}).catch(function (error) {console.log(error);});
}

export const delDataReq = async (method,id,model,callback) => {
  var config = {
    method: method,
    url: '/'+model+'/delete/'+id,
    headers: { 
      'accept': 'application/json', 
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
      'Content-Type': 'application/json'
    },
  };
axios(config).then(function (response) {callback()}).catch(function (error) {console.log(error);});
}