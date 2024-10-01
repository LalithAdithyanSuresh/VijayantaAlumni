import React from 'react';
import WhatsApp from '@assets/Logo/WhatsApp.svg';
function WhatsappHero() {
    return (
        <div className='m-auto h-screen flex justify-center items-center max-w-[1240px] w-full pt-20'>
            <div className='flex  items-center sm:items-stretch justify-around w-full sm:flex-row flex-col'>
                <div className='min-w-[250px] p-4 flex items-center justify-center flex-col  sm:pb-4 bg-green-500 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-[95%]'>
                    <img className='max-w-[100px] sm:max-w-[200px] mb-4' src={WhatsApp}></img>
                    <div className='font-bold text-white sm:text-4xl text-xl text-center'>Join Our Whatsapp Community</div>
                </div>
                <div className='min-w-[250px] p-8 sm:p-16 items-center flex flex-col justify-center border-8 border-green-500 w-[95%] rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none'>
                    <a href='https://chat.whatsapp.com/ChIGIkXvzyX0JWWBUkYG8j' className='w-[80%] mb-8'>
                        <div className='p-4 rounded-lg bg-green-500 text-white font-semibold text-center'>
                            Community Channel - 1
                        </div>
                    </a>
                    <a href='https://chat.whatsapp.com/JkRmgL23r114A6TPrKCPO4' className='w-[80%]'>
                        <div className='p-4 rounded-lg bg-green-500 text-white font-semibold text-center'>
                            Community Channel - 1
                        </div>
                    </a>
                </div>
            </div>
        </div>
   );
}

export default WhatsappHero;