







admin order page should  have tables for orders each table should be in tab
tabs depend on status (approved, completed, pending, new, refund, unapproved)
you should use shadcn and tailwind 
for fetching data use " use Query @apollo/client"

add empty state for each table 




@InputType()
export class OrderWhereInput { 
    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;
