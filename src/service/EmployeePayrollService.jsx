import axios from "axios";

class EmployeePayrollService {
  baseURL = `http://localhost:8083/pay_roll_services`;

  addEmployee = (data) => {
    console.log(data);
    return axios.post(`${this.baseURL + "/add"}`, data);
  };

  delete = (data) => {
    //return axios.delete(this.baseURL + 'delete/',data)
    axios.delete(`${this.baseURL}/delete/${data}`);
  };

  getAllEmployee = () => {
    return axios.get(`${this.baseURL + "/get/"}`);
  };
  getEmployeeById = (empId) => {
    return axios.get(this.baseURL + `/get/${empId}`);
  };

  updateEmployee = (empId, data) => {
    console.log(empId);
    return axios.put(`${this.baseURL}` + `/update/${empId}`, data);
  };
}

export default new EmployeePayrollService();
