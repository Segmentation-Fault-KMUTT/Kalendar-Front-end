let apiUrl = "https://kalendar-mr3crulbhq-as.a.run.app/"
const axiosInstance = axios.create({
    baseURL: 'https://kalendar-mr3crulbhq-as.a.run.app/',
});

//เซ็ท Token ให้มันใช้ได้กับทุกฟังชั่น (ทุกครั้งที่เปิดเว็ปมามันจะหาToken ให้ก่อน)
if (localStorage.getItem('TOKEN NAME')) {
    axiosInstance.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('TOKEN NAME')}`};
} else if (sessionStorage.getItem('TOKEN NAME')) {
    axiosInstance.defaults.headers.common = {'Authorization': `Bearer ${sessionStorage.getItem('TOKEN NAME')}`};
}

const createUser = async(user) => {
    await axiosInstance.post('/api/user', user);
}

function setToken(token) {
    localStorage.setItem('TOKEN NAME', token)
    axiosInstance.defaults.headers.common = {'Authorization': `Bearer ${token}`};
}

const loginUser = async(user) => {
    try{
         const response = await axiosInstance.post('/api/login',user);
        if(response.status == 200) {
            setToken(response.data.message.token);
        }
    } catch(error){
        console.log(error)
    }
   
}

const apiLoginToken = async() => {
    await axiosInstance.post('/api/login/token');
}

const apiEvents = async() => {
    await axiosInstance.post('/api/events/');
}

const getApiEventsId = async(eventId) => {
    try{
        const response = await axiosInstance.get('/api/events/',{params: {id:eventId}});
        console.log(response.data)
    } catch(error){
        console.log(error)
    }
}

const getApiEventsByPeriod = async() => {
    try{
        const response = await axiosInstance.get('/api/events/',{params: {daysBefore:1000,daysAfter:1000}});
        console.log(response.data)
    } catch(error){
        console.log(error)
    }
}

const patchEvent = async(props,id) => {
    try{
        let editProps = props
        editProps.id = id
        const patchResult = await axiosInstance.patch('/api/events/',editProps)
    }catch(error){
        console.log(error)
    }
} 

const deleteEvent = async(eventId) => {
    try{
        const patchDelete = await axiosInstance.delete('/api/events/',{params: {id:eventId}});
    }catch(error){
        console.log(error)
    }
} 


// TODO: ต้อง Create new account แล้วก็ เปลี่ยน daybefore dayafter ให้เป็น getAllPeriod



//const name = () => {};
//function name() {};

//const name = async () => {};
//async function name() {};