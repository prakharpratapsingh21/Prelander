import React from 'react'

function Practicecard1() {
    const data=[
        {price:"$120/hr",
         name:"Senior UI Developer",
         image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD8/Pze3t719fUEBATX19fi4uLx8fHFxcWhoaHl5eXS0tJlZWXAwMC3t7dUVFRJSUl8fHypqaksLCw+Pj6Pj482NjaEhIRxcXEfHx+xsbEWFhazs7NERESXl5dfX18jIyNra2ubm5tNTU1gYGASEhIWpA61AAAD/ElEQVR4nO3aaXfqKhSA4YBTYtKqMbVarR6H0///E0/GOpGIBky8933W6ldglx3YgI4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgimx4A6nKXnaaHYEeam9Kbr8TEb3oslsj+cCyECDtmPkTp+G35oNNx+N+7VRze17BrrF1/1JYIna4334rE5N1ks2uTjdUQbCYiszC4wEjpvO3NNfewwfQtj058bVyTLUtnL8zl+2Pc9zBKY+vFfx/JJ2P0q/HEwmRz+mS2JwSzj3zukvjeAuP9uEKYb1STHEz/iFOzZPczvep9iJXhFjW5o3B7Ft7n0sqKPo+3VRvt3uD9pmbhj6VMGsVtG914NHTSciX77Apz38oxIq5lktafuZK634vV2dQlYUZTe0NYJ6uztdYvxOXK5+XcxcaerVNgvFhv0vLBSuun3ST6w4NQCQcWu3b6aR9De13kBt87ZXTia2/3C5FRmjAjq51037PUVDgkS5y0WfPPs44sHqKPlfTV6iIWfXv9Ft0LqxH6x0paYW+0tlaSztZehHEl/VUR3truh1HYFKu2yZNY/NcNNuuK6ITYPakM9n/3Jc9gq528ku6Vxjezn565Y00/rd9Yuh7GlXR5YBlLtbWSd+zWROHdDWZpavaqYrRVW6tFx46jum0VlXSZLOq5xeJFYXo6gjpLjTu6qKTVthZrayV51v38wcJXerPodJZKjbPF7Jk3lvvzEbgP9N3fV6fmUdjAy0P3Ygz3ni785W6lM3fC7L31HYaX4/D0M6jrhZEqlCtJ9OtnXx/k5OpqLHrrnOzv1Yc8tSfU1iVG1//t3u0Q/eVbr5gbjen7MXtvfR9l2ViaT0n+uu/5c4mudaNPPQP1f31RtiQEm8uLv1t2SXo2FqIsDr7XZtfPrYPKQ57Sz/NqazXpVHxI42HndyalPzp5LtH18d38S2RwY4yfh3A2CydllyuVLDyrPGD2yNC1NJ2ehYcm57bs6Nd8iqaPaRb8NXlRUJN3e7h3SxZhq/eed7mqSeuKpq2JLVO6Gz5m3KL0zOme6rQ8+WZCj6EI4ypgO2xZeuZMzaG9V7+66keYFHFN3EzoMjCHP83cTOiqXbQdnn9xdp9lvfjanJ451flX19fQbfPkFaqfviocGro4u9vlPZSmJD3bP30ZvevOM2l6vgp585B/pYW1ZxXpZL8T0hamP4h8lQTN6Z0vktrls21HIz3y8u2pzKIVF0uP0TjpR+2uzW6Qjnvjpjfsv87moJIsHF75Xf3Ce+XgTgSqeYzm3itn55l4nrrnv9idzEfJzv5qW8Mtsh8sp9Nl0P/PTB0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H/rHzmJJf0q7/M3AAAAAElFTkSuQmCC'
        }
    ]
  return (
    <div className='main w-full h-screen bg-red-100 flex items-center justify-center flex-col gap-4'>
        <div className='container w-4/5 flex items-center justify-center gap-2'>
            {data.map((elem, index)=>(
                <div key={index} className='card1 w-48 h-56 bg-purple-100 rounded-lg overflow-hidden'>
                    <div className='nav w-full px-4 py-3 text-md font-semibold flex justify-between'>
                    <h3>{elem.price}</h3>
                    <i className="ri-bookmark-line"></i>
                    </div>
                    <h1 className="text-2xl px-4 font-semibold">{elem.name}</h1>
                    <div className="flex justify-end px-4">
                        <button><i className="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="w-full flex justify-center gap-0.5 mt-6">
                        <span className="w-1 h-1 rounded-full bg-black"></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
                    </div>

                    <div className="w-full px-2 mt-3 bg-white h-12 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover mt-1" src="{elem.image}" alt=""/>
                        </div>
                        <p className="font-bold text-[10px] leading-none ">Senior UI Developer</p>
                        <button className="text-xs px-4 py-1 bg-black text-white rounded-full">View</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Practicecard1