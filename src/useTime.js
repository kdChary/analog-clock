import { useEffect, useState } from 'react'

const useTime = () => {
	const [hours,setHours] = useState(0)
	const [minutes,setMinutes] = useState(0)
	const [seconds,setSeconds] = useState(0)

	useEffect(()=>{
		const setTime = setInterval(() => {
			const date = new Date()
			setHours(Math.floor(date.getHours() /12 * 360 ))
			setMinutes(Math.floor(date.getMinutes()/60 * 360))
			setSeconds(Math.floor(date.getSeconds()/60 * 360))

			return () => clearInterval(setTime)
		}, 1000);
	},[])
	return {hours,minutes,seconds}
}

export default useTime