import React from 'react'
import { useParams } from 'react-router'

const UserInbox = () => {  
    const {user: currentUser} = useParams(); 

    const users = [
        {
          id: 1,
          name: "Jhon Wick",
          email: "jhon.wick@email.com",
          photo:
            "https://i.pinimg.com/736x/92/6c/8e/926c8e161cde3909dcd0f54fa1ff9483.jpg",
        },
        {
          id: 2,
          name: "Alice Johnson",
          email: "alice.johnson@email.com",
          photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 3,
          name: "Michael Brown",
          email: "michael.brown@email.com",
          photo: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          id: 4,
          name: "Emily Davis",
          email: "emily.davis@email.com",
          photo: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          email: "robert.wilson@email.com",
          photo: "https://randomuser.me/api/portraits/men/57.jpg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          email: "robert.wilson@email.com",
          photo: "https://randomuser.me/api/portraits/men/57.jpg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          email: "robert.wilson@email.com",
          photo: "https://randomuser.me/api/portraits/men/57.jpg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          email: "robert.wilson@email.com",
          photo: "https://randomuser.me/api/portraits/men/57.jpg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          email: "robert.wilson@email.com",
          photo: "https://randomuser.me/api/portraits/men/57.jpg",
        },
      ];

      const inboxUser = users.find(user => user.name === currentUser)
      console.log(inboxUser)

  return (
    <div>
    </div>
  )
}

export default UserInbox
