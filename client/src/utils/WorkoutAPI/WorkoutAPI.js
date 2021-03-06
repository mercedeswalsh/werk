import axios from 'axios'

const WorkoutAPI = {

  getAllWorkouts: () => axios.get('/workouts'),
  getUserWorkouts: (token) => axios({
    method: 'GET',
    url: '/userworkouts',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }),
  createWorkout: (workout) => axios.post('/workouts', workout),
  updateWorkout: (id, values) => axios.put(`/workouts/${id}`, values),
  deleteWorkout: (id) => axios.delete(`/workouts/${id}`),
  getWorkout: (id) => axios.get(`/workouts/${id}`)

}

export default WorkoutAPI