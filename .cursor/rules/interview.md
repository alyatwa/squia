




## Interview page

for managing interviews admin should have a table for available interviews, 

follow AdminOrdersPage.tsx to see how i want it to look like , so u have to refactore AdminInterviewsPage



use shadcn tools


you should use shadcn and tailwind 
for fetching data use " use Query @apollo/client"
keep in mind i use react & nextjs
follow the best practise and write clean code


this the data u can use  from this query

query Interviews($where: InterviewWhereInput) {
  interviews(where: $where) {
    duration
    dateTime
    meetingType
    scheduledAt
    status
    worker {
      id
      user {
        id
        name
      }
    }
    order {
      id
      title
    }
    Client {
      companyType
      id
      user {
        name
      }
    }
  }
}
