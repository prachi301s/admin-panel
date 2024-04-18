import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
// import {
//   DashboardSummaryCardOne,
//   DashboardSummaryCardTwo,
// } from '../DashboardSummaryCard.jsx';

import { Icon } from "@iconify/react";
// import DashboardSummaryCard from '../DashboardSummaryCard.jsx';
// import DashboardGraph from '../DashboardGraph.jsx';

import img_1 from "../../../assets/assets/images/group01.png";
import img_2 from "../../../assets/assets/images/group02.png";
import img_3 from "../../../assets/assets/images/group03.png";
import DashboardSummaryCard, {
  DashboardSummaryCardOne,
  DashboardSummaryCardTwo,
} from "./DashboardSummaryCard";
import DashboardBookingTable from "./DashboardBookingTable";
import DashboardCustomerTable from "./DashboardCustomerTable";
import DashboardGraph from "./DashboardGraph";
// import { DashboardBookingTable } from '../DashboardBookingTable.jsx';
// import { DashboardCustomerTable } from '../DashboardCustomerTable.jsx';

// ----------------------------------------------------------------------

export default function DashboardView() {
  const data = [
    {
      id: 1,
      jobTitle: "React Developer",
      description: "junior",
      status: "Active",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      jobTitle: "React Developer",
      description: "junior",
      status: "Active",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      jobTitle: "React Developer",
      description: "junior",
      status: "Active",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCBgcDAQj/xABFEAABAwIEAwQFCAQPAQAAAAABAAIDBBEFEiExBkFREyJhcTJCgZHRBxQVI1JiscGSocLhFyUnM0NjZXJzg5SipLLwFv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QANREAAgEDAgQCCAUEAwAAAAAAAAECAwQREjEFIUFRYYETFCIykbHB8AYzQ3HRIySh4RVS8f/aAAwDAQACEQMRAD8A7CgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgPOaohgF5pGs8ytNa4pUVmpJIzhTlP3UQJcagYSI2Pk8dgqmrx6hH8tOX+PnzJMbKb3eCM/G5Se5DGB4klQpfiCq/dgl5m5WMerMfpqo+xH7j8Vr/565/6oy9Rp9zNmOSevA0+TrLbD8QVF78F5MxdjHoyVDjFM+wkDoz4i4U+jxy2n7+Y/fgaJ2VRbcydHJHK3NE9r29QVa06sKq1QeV4EaUZReJIzWwxCAIAgCAIAgCAIAgMJZGRML5XBrRzJWurVhSjrm8IyjFyeEUtZjD33bSjI37Z3PwXM3nG5z9mhyXfr/osaVmlznzKxznPdmc4knclUUpSm9UnlkxJLY+EgAkkADcleJN8kelNW8VYFROLJsSgL2mzmxnOR+jdTafDbupzUH58vmanWgt2Qf8A73h7Nl+czf6d3wUj/hbvGcL4ox9ZgT6PinA61zWQ4lAHu2bKchPlmso9Tht1TWXB+XMyVaD6lwCCARzUJ8jaZRyPidnie5ruoKyp1J0paoPD8DGUVJYZbUeMbMqx/mAfiF0VnxzLULhea+qINWy60/gXDXNc0OaQWnYhdFGSktUXlEBpp4Z9WR4EAQBAEAQBAeNVUR0sRkkPkBuSo11dU7anrm/9+BspU5VJYRrdXVyVcmaQ2aPRaNguLvL2pdz1T26Lt99y3pUY044R4KGbSq4ix6kwCiFRU3fI/SKFpGaQ/Acz+KmWVlO6npjt1fY11KiguZyfHOI8Txt5+dzlkHKniJDB5jn7V11tZUbZewuffqQJ1JT3Ki3JSzAIBvugLvh7ifEMClb2UjpqW/fppHXaR937J8lCu7CjdL2lh9/vc2Qqyg+R13CsSpsVooqukfeOQXF9weYPiCuOuLedvUdOe6LGMlJZRMWg9JdBXvpH21dEd2/BWVhxGdrLG8eq/g0V7eNVeJscMjJo2yRuzNI3XZ0asK0FODymVEouD0yM1sMQgCAIAgMZHtjY57zZrRckrCpUjTi5yfJHqTbwjWK6qfWTZ3aNGjW9AuGvr2V3V1vbovD73LmjSVKOOpHUI3BAcd4+xB9fxNUtJ+qprQxDyAzH9K/uC7XhdFUrWPd82V1aeqbNdVgaggCAIAgN8+TCtfeuoXu7oDZo/A7O/ZVDxuksQqL9n9CbaS3idBZKRo7ULnXFExxPZrg4XbqFraMME7C600suV5+qfo7w8VacLv3bVNMvce/h4/yRrmgqkcrc2TcaLs08oqAvQEAQBAU2O1WopmHTd/5D/wB4LmeO3nNW8f3f0RYWVL9RlOucLAIANwh4zgNXOamsqJ737WV8l/AklfQ4R0QjHskVb5ybJ+BcPYpj73tw2nD2x+nI92VjT0v18AvJ1Iw3PYwctiZXcEcR0Z72GvmH2qdwePj+peRrQezPXTkuhAZgGNvflGDYjfbWleB7yLLLXDueaJdi7w35O8frWZ5o4aJttBUP7xPk261yrwXiZxozZQ41g9dgdaaTEYgyS2Zrmm7Xjq08wtkZqayjCUXF8y2+T2bsuJoWE/z0UjLddM37Kr+LQ1WjfZr+PqbbZ4qnVFyZaAEg3CNA9mS30fotbgYOJseCVXbQGFzruj28Wrq+C3fpaTpS3j8ipvKWmWpbMs1dkMIAgMXuDGFztmgkrGc1CLlLZHqWXhGpzSOmlfI7dxuvntaq61SVSXV5L2EVGKSMFqMggMXnLG49GkrKCzJHj2Pz1GbQNJ0swEr6LLcquh37g/C24Rw5RUobaQxiSU8y92p+HsVXVlqmydTjpiXK1mYuUAQGm/Knhrazhk1YZeaie17TzykhrvxB9ikW8sTx3NNeOY5Ob8GOtxXhpB/pHjT/AA3hZcR52k/2+qNND82J18rjS2PiA+oCVhlSaWtikuQ0nK7yO6l2Nb0FxGfl5M0XFNVKbRuS7coQgCAhYxJkoHjm4hqrOMVNFpJLry+JJtY6qq8DW1xJbhAEBlGxsjgxwu12hHUKRa01UrRizx7HN/lC4SpaKvw6fDqZsNJWTNp5ooxZrHEgAgcri/tHiu1o1dSedyBVpqOMbHViLG2ygksIAgCAquLIhNwxirHbGlk/6rZS99GFT3Wap8mfDNM3C2YvXQNkqZyXU5cL9kzUXHQu1N+llndtTTp9OproQS9pmyuFiR0XItYeCwR8Xh6EAR7A3XD5e3oYJDu5gv5rubSp6WhCfdHP146Kko+JIUk1BAVXEDrQQt6vJ9w/eqD8QSxSgvH6E6xXtNlGuVLIIAgPrTlcCNws6c3TmproCTNFBVxCOdjXsLg4NPVpBB8wQCuopV4ySlF7mpxysM9lsAQBAEB51MEVTBJBOwPikaWvaeYO4XqeHk8ayjCaSKmgtHlFhlY1ugHs8FGuLhU4N55mcYlUufJAQBAEBtfD7s2GMB9Vzh+tdfwiWq0j5/Mpb1YrMslZkQICp4hH1UH94/gue/EC9im/F/In2O8ikXLliEAQBAZRHLI0+K320/R1oyPHsTl1BrCAIAgBIAJO3NeNpLLBSudmcXHmbrmpvVJyJKWDFYnoQBAEBtPDo/i1p6vcut4MsWi/d/Mpb385+RaK1IgQFbjrM1G1w9R4P5Kl47T1Wyl2ZMsnio13KBcgWgQBAEAQEmCW4DXHXkVd2V6pJU5vn0MGj3VoYhAOV9h1RvCyCuq6nOOzjPd5nqqi7u1P2IbG6MMc2RFXGwIAgCA+oeG3YKzJhkGnpNze8rtOGw02sPj8Sju5ZrSJynEcIDxrIu3pJYxuW6efJRryj6ehOn3Rsoz0VFI1RfPy8CAIAgCAkQUkktibtZ1IVrZcJrXOJS9mPcjVrmFPluz7L2tK/K/vN9Uq89W9XWjLa8RRqqrHPU+GpFtGm/iV5g3YDIJK70nFkY6dUlZetRw3hGircKjtzZDqqOamuXgFn2hsqO74fWteclld0b6NzCrtuR/JQiQEAQBAZxRmWRkbfSe4NHtWcIOpNQXV4MZS0xb7G8RsEcbWN9FoAC72MVCKiuhzsnqbZksjwIAgNaxWn+b1brCzH95v5riOK2vq9w8bS5r6lxbVNcPFENVpIC9BYUWFSVEbZXvEbHajTUhXFlwepcQVSTwn8SJWu403pSyyzhwqliHeaZD986e5XdHg9rT3Wp+JDnd1ZdcEh9Oxw7rQ0+CtEklhEZ8yHU0t2lsjbsPMLyUVJYZlCcoPKKptE75z2RcMts1+eVQlbS1Y6Fi7uOjPXsW9PTEtDWDKwaKckorCK6UnJ5ZMZCxjbAXB3vrdGk1hmKbTyiLPhNFNvCGHqzu/hooNXhtrV5uOH4ciRC6qw2ZS4rhHzKMTQvc+O9iHDVqo7/hfq0NcHmPyLC2u/Sy0tcyqVQTQgLjhulMlS6ocO5FoPFx/crrg1trquq9o/P8A8IN9U0w0LqbKuoKgIAgCAi4lSCrpy0Ado3Vh8eigcRs1dUHFe8ua+/E3UKvop56GskFpIIII0IPJcM4uLw9y5Tyj0pITUVEcQ9Y6+XNSLSg7itGn3+XUwqz0QcjawA0ANFgNAAu/SSWFsUjeXk+r08CAwmj7aGSK5bnYW3G4uLIuTGMnB4xjz+Kvow19SMRc/wCYOm7Qh2S9jr0t3r7891btU/RasctyqTqelxnnsd5jYI2NYCSGtDQTzsqh8y1MkAQHnPE2eF8T/Re0grXVpqrBwlszKEnGSkjSZY3QyOjeLOYbFcHUhKnNwluuR0MZKSUkfYYnzysiiF3vNgFlSpSqzUILmxOahHUzcqKmZSUzIWeqNT1PMrt7a3jb0lTiUFWo6k3Jnut5rCAIAgCAqsXw8y3qIB9YB3mj1vHzVBxbhrq5rUl7XVd/H9yda3Gn2JbHlgEN3STkbd1vnzUfgFDMp1mtuX8md9Pkooul05XBAEAQHFIpx/Cxn5fS7mf7y1WuP7bHgVmr+4z4na1VFmEAQBAazxDTFle18bSe3GgHNw0+C5XjFu43KlFe98y3sqidJpvYtMHwwUUfaSgGd41+6OituG8PVtHXP3n/AI8CHdXLqvStiyVoRAgCAIAgCAIDFrGsvkaG3NzbmVjGEYe6sHrbe5ksjwIAgA3QHA2S/wAoYk/tzN/yFc/o+X0Kn9fzO+KmLYIAgCAxcxrnNcWglvom2yxcYtqTXNHuWlhGSyPAgCAIAgCAIAgCAIAgCA+jceaA/O3bBvFXbZhpiOff+turrH9PyKfP9XzP0S70j5qlLg+IAgCAIAgCAIAgCAIAgCAIAgCAIAgIf0VhwfnFBS5r3v2Ld/cstcu5jpj2JixMggCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID//2Q==",
    },
    {
      id: 1,
      jobTitle: "React Developer",
      description: "junior",
      status: "Active",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      jobTitle: "React Developer",
      description: "junior",
      status: "Active",
      img: "data:image/jpeg;base64,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",
    },
  ];
  const todayCardData = [
    {
      id: 1,
      icon: <Icon icon="heroicons:user-group" fontSize={24} color="#F9921F" />,
      title: "Today's Customers",
    },
    {
      id: 2,
      icon: <Icon icon="tdesign:user-business" fontSize={24} color="#F9921F" />,
      title: "Today's Experts",
    },
    {
      id: 3,
      icon: <Icon icon="carbon:chat" fontSize={24} color="#F9921F" />,
      title: "Today's Chats",
    },
    {
      id: 4,
      icon: <Icon icon="ion:call-outline" fontSize={24} color="#F9921F" />,
      title: "Today's Calls",
    },
    {
      id: 5,
      icon: <Icon icon="heroicons:user-group" fontSize={24} color="#F9921F" />,
      title: "Today's Video Calls",
    },
    // {
    //   id: 6,
    //   icon: <Icon icon="tdesign:user-business" fontSize={34} color="#F9921F" />,
    //   title: 'Today Experts',
    // },
    // {
    //   id: 7,
    //   icon: <Icon icon="carbon:chat" fontSize={34} color="#F9921F" />,
    //   title: 'Today Chats',
    // },
    // {
    //   id: 8,
    //   icon: <Icon icon="ion:call-outline" fontSize={34} color="#F9921F" />,
    //   title: 'Total Calls',
    // },
  ];
  const totalCardData = [
    {
      id: 1,
      icon: <Icon icon="heroicons:user-group" fontSize={24} color="#F9921F" />,
      title: "Total Customers",
    },
    {
      id: 2,
      icon: <Icon icon="tdesign:user-business" fontSize={24} color="#F9921F" />,
      title: "Total Experts",
    },
    {
      id: 3,
      icon: <Icon icon="carbon:chat" fontSize={24} color="#F9921F" />,
      title: "Total Chats",
    },
    {
      id: 4,
      icon: <Icon icon="ion:call-outline" fontSize={24} color="#F9921F" />,
      title: "Total Calls",
    },
    {
      id: 5,
      icon: <Icon icon="heroicons:user-group" fontSize={24} color="#F9921F" />,
      title: "Total Video Calls",
    },
    // {
    //   id: 6,
    //   icon: <Icon icon="tdesign:user-business" fontSize={34} color="#F9921F" />,
    //   title: 'Today Experts',
    // },
    // {
    //   id: 7,
    //   icon: <Icon icon="carbon:chat" fontSize={34} color="#F9921F" />,
    //   title: 'Today Chats',
    // },
    // {
    //   id: 8,
    //   icon: <Icon icon="ion:call-outline" fontSize={34} color="#F9921F" />,
    //   title: 'Total Calls',
    // },
  ];
  const earningCard = [
    {
      id: 5,
      icon: <Icon icon="heroicons:user-group" fontSize={24} color="#F9921F" />,
      title: "Video call earning",
      img: img_3,
    },
    {
      id: 6,
      icon: <Icon icon="tdesign:user-business" fontSize={24} color="#F9921F" />,
      title: "Call earning",
      img: img_1,
    },
    {
      id: 7,
      icon: <Icon icon="carbon:chat" fontSize={24} color="#F9921F" />,
      title: "Chat earning",
      img: img_2,
    },
  ];
  return (
    <Container maxWidth="xl">
      {/* <Typography variant="h3" sx={{ mb: 5,mt:2 }}>
        LegalCare Admin
      </Typography> */}

      <Grid container spacing={3} mt={2}>
       
          
        {todayCardData.map((card) => (
          <Grid xs={12} sm={6} md={2.4}>
            <DashboardSummaryCard
              title={card.title}
              total={714000}
              icon={card.icon}
            />
          </Grid>
        ))}

        {earningCard.map((card) => (
          <Grid xs={12} sm={3} md={4}>
            <DashboardSummaryCardOne
              title={card.title}
              total={714000}
              photo={card.img}
              icon={card.icon}
            />
          </Grid>
        ))}

       

        <Grid xs={12} md={12} lg={12}>
          <DashboardGraph />
        </Grid>
        {totalCardData.map((card) => (
          <Grid xs={12} sm={6} md={2.4} lg={2.4}>
            <DashboardSummaryCardTwo
              title={card.title}
              total={714000}
              icon={card.icon}
            />
          </Grid>
        ))}
        <Grid xs={12} md={4} lg={6}>
          <DashboardBookingTable title={"Today's Booking"} />
        </Grid>
        <Grid xs={12} md={4} lg={6}>
          <DashboardCustomerTable title={"All Customers"} />
        </Grid>
        {/* <Grid xs={12} md={6} lg={4}>
          <DashboardPie
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={4} lg={4}>
          <DashboardRecentCards title={'Recent Customers'}>
            {data.map((item) => (
              <>
                <RecentCardItem
                  title={item.jobTitle}
                  // status={item.status}
                  description={item.description}
                  image={item.img}
                />
                <Divider sx={{ borderStyle: 'solid' }} />
              </>
            ))}
          </DashboardRecentCards>
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <DashboardRecentCards title={'Recent Experts'}>
            {data.map((item) => (
              <>
                <RecentCardItem
                  title={item.jobTitle}
                  // status={item.status}
                  description={item.description}
                  image={item.img}
                />
                <Divider sx={{ borderStyle: 'solid' }} />
              </>
            ))}
          </DashboardRecentCards>
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <DashboardRecentCards title={'Recent Bookings'}>
            {data.map((item) => (
              <>
                <RecentCardItem
                  title={item.jobTitle}
                  status={item.status}
                  description={item.description}
                  image={item.img}
                />
                <Divider sx={{ borderStyle: 'solid' }} />
              </>
            ))}
          </DashboardRecentCards>
        </Grid> */}
        {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid> */}
        {/* 
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}
        {/* <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
