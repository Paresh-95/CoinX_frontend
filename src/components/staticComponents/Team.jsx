import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'John Smith',
      designation: 'Designation here',
      image: './person1.png',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
    },
    {
      name: 'Elina Williams',
      designation: 'Designation here',
      image: './person2.png',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
    },
    {
      name: 'John Smith',
      designation: 'Designation here',
      image: './person3.png',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
    }
  ]

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 sm:mb-6">Team</h2>
      <p className="text-gray-600 mb-4 sm:mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#E8F4FD] p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center md:w-48 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-lg mx-auto mb-2 object-cover"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </div>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}