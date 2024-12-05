import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const EquipmentDetails = () => {
        // const { newRating, setNewRating, appointmentsList, setAppointmentsList , setPaymentList} = useContext(AuthContext);
    // // console.log(newRating);
    const {service_id} = useParams();
    const {data} = useLoaderData();
    console.log(data)
    // const [selectedDate, setSelectedDate] = useState(null);
    // const [dayName, setDayName] = useState(null);
    // const [serviceDate, setServiceDate] = useState(null);
    // const [serviceTime, setServiceTime] = useState(null);
    // const [bookDate, setBookDate] = useState(null);

    // const [activeStatus, setActiveStatus] = useState(null);


    
    
    
    
    // const serviceDetail = data.find(service=>service.id==service_id);
    
    const {_id,imageURL, category, customization, description, itemName, price, rating, processingTime} = data;

    // const [statusType, setStatusTypes ] = useState(null);


    // const setDurationTime = (date, day) =>{
    //     setServiceDate(date?.toLocaleDateString("en-US", {
    //         month: "short",
    //         day: "numeric",
    //         year: "numeric",
    //     }).replace(",", ""));

    //     setServiceTime(duration.find(time =>time.includes(day)));

    //     setBookDate(new Date().toLocaleDateString("en-US", {
    //         month: "short",
    //         day: "numeric",
    //         year: "numeric",
    //     }).replace(",", ""))
    // }    
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    
    //     const options = { weekday: "long" };
    //     const day = date.toLocaleDateString("en-US", options);
    //     setDayName(day);
    //     setDurationTime(date, day);
    //   };

    // const allowedDays = number_day;
    // const isDayAllowed = (date) => {
    //     const day = date.getDay();
    //     return allowedDays.includes(day);
    //   };

    

    // useEffect(()=>{
    //     setNewRating(rating);
    // },[])
    // // const [newRating, setNewRating] = useState(rating);
    // // const [isInWishList, setIsInWishList] = useState(false);
    // const handleStatusTypes =(status)=>{
    //     setStatusTypes(status);
    //     setActiveStatus(status);
    // }
    
    // const handleAppoint=()=>{
    //     if(statusType == null || selectedDate == null){
    //         toast.warning('Please Select both Status Type and Duration Time')
    //     }else{
    //         document.getElementById('my_modal_1').showModal()
            
    //     }
    // }
    
   
    // const handleConfirm=()=>{
    //     const appointment = {id,service_name,service_category,service_image,statusType,serviceDate, serviceTime,service_description,pricing,counselor_image,counselor_name,counselor_expertise, bookDate};
    //     const newAppointments = [...appointmentsList, appointment];
    //     setAppointmentsList(newAppointments);
    //     setPaymentList(newAppointments);
    //     setStatusTypes(null);
    //     setServiceDate(null);
    //     setServiceTime(null);
    //     setSelectedDate(null);
    //     toast.success(`Successfully Appointed at ${service_name} with ${counselor_name}`)
    // }
    // // const ratingChanged = (newRating) => {
    // //     setNewRating(parseFloat(newRating));
    // //   };
    return (
        <div>
            Equipment details
             <Helmet>
        <title>Equipment Details Page</title>
        
      </Helmet>
            <div className='lg:w-[80%] w-[95%] mx-auto'>
        
            <div className='w-full'>
            <div className='py-[15px]'>
            <div className="bg-white rounded-3xl border">
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-[50%] w-full h-full p-5 flex flex-col gap-5'>
                    <div className='w-full'>
                    <img
                        src={imageURL}
                        className="rounded-lg w-full h-full" />
                    
                    </div>
                    
                </div>

            <div className='flex flex-col justify-center gap-y-5 p-8 lg:w-[50%]'>
              
                <h1 className="text-3xl font-bold">{itemName}</h1>
                <h1 className="text-xl">Category:{category}</h1>
                <p className="text-xl">Price: ${price}</p>
                <p className="">{description}</p>
                
             
                
                <div>
                {/* <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isDayAllowed}
        dateFormat="yyyy-MM-dd"
        placeholderText="Click here to select a date"
        minDate={new Date()}
        className='p-2 rounded-lg bg-gray-200 font-bold'
      /> */}
                </div>

                
                <div >
                    <h4 className='font-bold'>Rating: 
                        <span className='border p-2 ml-2 rounded-xl'>{rating}</span></h4>
                    
                </div>
                <div>
                
                
                </div>
                
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           

        </div>
    );
};

export default EquipmentDetails;