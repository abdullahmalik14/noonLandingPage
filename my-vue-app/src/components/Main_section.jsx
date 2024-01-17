import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card_Section_One = () => {
    return (
        <>
            <div className="maincontainer" style={{backgroundColor:"#F5F2F2"}}>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div style={{backgroundColor:"white",padding:"10px"}}>
                            <h2>More reasons to shop</h2>
                            <div className="col1212">
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif" alt="" />
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif" alt="" />
                            </div>
                            <br />
                            <div className="col1212">
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif" alt="" />
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif" alt="" />
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={4} >
                        <div style={{backgroundColor:"white",padding:"10px"}}>
                            <div className="d-flex">
                                <h2>Mega deals</h2>
                                <button style={{color:"white",backgroundColor:"#686363",borderRadius:"5px",width:"90px",marginLeft:"150px",fontSize:"15px"}}>ALL DEALS</button>
                            </div>
                            <div className="d-flex" style={{ marginTop:"10px" }}>

                                 <Card >
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            style={{width:"200px",height:"150px",objectFit:'contain',backgroundColor:"#F5F2F2"}}
                                            
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020112V/45/_/1698760325/746820c5-e64f-4c07-859b-cf86853cd6c6.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Apple AirPods Pro <br />(2nd Generation)
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card  >
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            style={{width:"200px",height:"150px",objectFit:'contain',backgroundColor:"#F5F2F2"}}
                                            image="https://f.nooncdn.com/products/tr:n-t_240/v1669102687/N28431691A_16.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Xiaomi Poco C65 Black
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                               
                            </div>
                            <div className="d-flex" >
                                <Card >
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            style={{width:"200px",height:"150px",objectFit:'contain',backgroundColor:"#F5F2F2"}}
                                            
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pzsku/Z4EB55AB9D8F6A4E5DE0CZ/45/_/1699291228/66684342-f927-44d6-9a83-98fe3ff1b032.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                LEGO City Stunt Show
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card >
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                          
                                            sx={{width:"200px",height:"150px",objectFit:'contain',backgroundColor:"#F5F2F2"}}
                                            image='https://f.nooncdn.com/products/tr:n-t_240/pnsku/N53437293A/45/_/1694677785/7a51c387-b7d3-4049-a60e-5c9b8cf20cbe.jpg'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Prime by javaudan 6 in 1
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} sx={{marginLeft:"-10px"}}>
                        <div style={{backgroundColor:"white",padding:"10px"}}> 
                            <h2>In focus</h2><br />
                            <img style={{marginTop:"-15px"}} width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif" alt="" />
                            <br /><br /><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/1b352827-1fc9-40cd-8d51-4f0b28b8f389.png?format=avif" alt="" />
                        </div>
                    </Grid>



                </Grid>





            </div>





        </>
    )
}

export default Card_Section_One