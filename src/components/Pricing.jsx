import React from 'react'

const Pricing = () => {
  return (
    <div class="container mx-auto px-6 mt-5">
    <h2 class="text-xl font-bold text-center mt-3 text-sky-700">Pricing Details</h2>
    <hr
class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    <p class="text-center text-gray-500 mt-1 text-[10px]">Find the Right Option for You</p>

    <div class="grid md:grid-cols-3 gap-6 mt-10">
        
      
        <div class="bg-white p-6 rounded-xl shadow-lg text-center border-[1.5px] border-sky-700">
            <h3 class="text-xl font-bold">Chat</h3>
            <p class="text-gray-700 text-lg font-medium mt-2">₹6/min</p>
            <p class="text-gray-500 mt-4 text-[14px]">
                Engage in meaningful text conversations with our qualified experts. Whether you need someone to talk to, seek advice, or simply vent, our chat service is available to provide you with the support you need.
            </p>
            <button class="bg-sky-700 text-white px-6 py-2 rounded-lg mt-6 hover:bg-[#82b5d4]">
                Start Chat
            </button>
        </div>

       
        <div class="bg-white p-6 rounded-xl shadow-lg text-center border-[1.5px] border-sky-700 relative">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-700 text-white px-3 py-1 text-sm font-bold rounded-md">
                Most Popular
            </span>
            <h3 class="text-xl font-bold">Audio Call</h3>
            <p class="text-gray-700 text-lg font-medium mt-2">₹6/min</p>
            <p class="text-gray-500 mt-4 text-[14px] ">
                Connect with our experts through voice calls, allowing for a more personal and interactive experience. Discuss your concerns, share your thoughts, and receive real-time verbal feedback.
            </p>
            <button class="bg-sky-700 text-white px-6 py-2 rounded-lg mt-12 hover:bg-[#82b5d4]">
                Start Call
            </button>
        </div>

       
        <div class="bg-white p-6 rounded-xl shadow-lg text-center border-[1.5px] border-sky-700">
            <h3 class="text-xl font-bold">Video Call</h3>
            <p class="text-gray-700 text-lg font-medium mt-2">₹18/min</p>
            <p class="text-gray-500 mt-4 text-[14px]">
                For those who prefer face-to-face communication, our video call service offers a more intimate and empathetic way to connect.
            </p>
            <button class="bg-sky-700 text-white px-6 py-2 rounded-lg mt-16 hover:bg-[#82b5d4]">
                Start Video
            </button>
        </div>

    </div>
</div>
  )
}

export default Pricing
