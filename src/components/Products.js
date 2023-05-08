import React from "react";
import AOS from 'aos';
import { useEffect ,useState} from 'react';

export default function Products()
{


    var books = [
        {title:"Tragedy of Macbeth",
        author:"William Shakespeare",
        subject:"tragedy",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1529167182942-894f5ff43f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },



        {title:"Death on the Nile",
        author:"Agatha Christie",
        subject:"tragedy",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       },


        {title:"Harry Potter & deathly hallons",
        author:"J. K. Rowling",
        subject:"Magic",
        publishDate:"April 12 2005",
        image:"https://images.unsplash.com/photo-1608662255987-d9e899969bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" 
      },

        {title:"Tragedy of Prince ",
        author:"William Shakespeare",
        subject:"tragedy",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1553782749-5ab8693a5f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80"
       },


        {title:"Avengers",
        author:"Jason Aaron",
        subject:"superpower",
        publishDate:"March 3 2014",
        image:"https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
       },


        {title:"Harry Potter & deathly hallons",
        author:"J. K. Rowling",
        subject:"Magic",
        publishDate:"April 12 2005",
        image:"https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
      },


        {title:"Murder of Roger",
        author:"Agatha Christie",
        subject:"crime",
        publishDate:"May 1 1989",
        image:"https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
      },


        {title:"Tragedy of Prince",
        author:"William Shakespeare",
        subject:"crime",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1632743050362-0c61a1ad2462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },


        {title:"Captain America",
        author:"Stan Lee",
        subject:"superpower",
        publishDate:"March 3 2014",
        image:"https://images.unsplash.com/photo-1613330916855-d27dbb9f5500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
      },


        {title:"Amazing Spiderman",
        author:"Stan Lee",
        subject:"superpower",
        publishDate:"August 13 2009",
        image:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },


        {title:"Harry Potter & Prisoner"
        ,author:"J. K. Rowling",
        subject:"Magic",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },


        {title:"Harry Potter & Prisoner",
        author:"J. K. Rowling",
        subject:"Magic",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },


        {title:"Shazam",
        author:"Geoff Johns",
        subject:"superpower",
        publishDate:"May 21 2020",
        image:"https://images.unsplash.com/photo-1658070845252-8de7cfb53652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },


       


        {title:"Thor",
        author:"Jason Aaron",
        subject:"superpower",
        publishDate:"March 3 2014",
        image:"https://images.unsplash.com/photo-1613331455414-1e9258b4b422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      },


        {title:"Avengers",
        author:"Jason Aaron",
        subject:"superpower",
        publishDate:"August 13 2009",
        image:"https://images.unsplash.com/photo-1620336655052-b57986f5a26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      },


      
        {title:"Guardians of the galaxy",
        author:"Brian Micheal Bendis",
        subject:"superpower",
        publishDate:"March 3 2014",
        image:"https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },

        {title:"Ultimate spiderman",
        author:"Brian Micheal Bendis",
        subject:"superpower",
        publishDate:"August 3 2009",
        image:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      },



        {title:"Fantastic Four",
        author:"Johnathan Hickman",
        subject:"superpower",
        publishDate:"March 3 2014",
        image:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/07/24/1068868-fantastic-four-2024-mcu.png?im=Resize=(1280,720)" 
      },


        {title:"Superman",
        author:"Jerry Siegel",
        subject:"superpower",
        publishDate:"August 3 2009",
        image:"https://images.unsplash.com/photo-1594344041337-0223bd103abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       },


        {title:"Smallville",
        author:"Jerry Siegel",
        subject:"tragedy",
        publishDate:"Feb 1 2002",
        image:"https://images.unsplash.com/photo-1612620486050-1462932b56e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80"
       },


        {title:"Hulk",
        author:"Stan Lee",
        subject:"superpower",
        publishDate:"December 9 2016",
        image:"https://images.unsplash.com/photo-1562613531-a131faf45335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
       },


        {title:"Hulk",
        author:"Stan Lee",
        subject:"superpower",
        publishDate:"December 9 2016",
        image:"https://images.unsplash.com/photo-1608272841063-67f50df421c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
      ];
    
      

      
      const[count,setCount]=useState(books.length)

    const [currentPage, setCurrentPage] = useState(1);
    const [currentBook, setCurrentBook] = useState([]);
    const[allbooks,setAllBooks]=useState(books);
    const[searchedBooks,setsearchedBooks]=useState();
   
    const numberOfProductsPerPage = 6;
    let PageSize = Math.round(count/numberOfProductsPerPage);
    const [filter , setFilter] = useState(false)
    const [filtername,setFiltername] = useState(0);
    const [filterdata,setFilterData] = useState([]);
   


    console.log(allbooks)

    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing

        });

        pagechange();
        filterchange();

        if(filterdata.length!=0){
        setCount(searchedBooks.length)
        }
      }, [currentPage,filtername,searchedBooks]);
    



     
        
      const pagechange = ()=>{
        if(searchedBooks!= null)
        {
            setCurrentBook( ()=>{
                return searchedBooks.slice( (currentPage-1)*numberOfProductsPerPage , currentPage*numberOfProductsPerPage )
            } )

        }
         else{
            setCurrentBook( ()=>{
            return books.slice( (currentPage-1)*numberOfProductsPerPage , currentPage*numberOfProductsPerPage )
        } )
    }
      }

      const filterchange = ()=>{
            switch (filtername) {
                case 1:
                    setFilterData([...new Set(books.map(item => item.author))])

                    break;

                case 2:
                    setFilterData([...new Set(books.map(item=>item.title))]);
                    break;

                    case 3:
                        setFilterData([...new Set(books.map(item=>item.subject))]);
                        break;

                        case 4:
                            setFilterData([...new Set(books.map(item=>item.publishDate))]);
                            break;
                
            
                      default:
                          break;
            }
      }
    
    


      
        

      function search(target)
      {

                switch(filtername)
                {
                    case 0:
                        setsearchedBooks( books.filter(function (book) {
                            return (book.author === target) || (book.title === target) || (book.subject === target);
                        }) )
                        break;

                     case 1:
                        setsearchedBooks( books.filter(function (book) {
                            return book.author === target;
                        }) )
                        break;

                        case 2:
                            setsearchedBooks( books.filter(function (book) {
                                return book.title === target;
                            }) )
                            break;

                            case 3:
                                setsearchedBooks( books.filter(function (book) {
                                    return book.subject === target;  
                                }) )
                                break;

                                
                            case 4:
                              setsearchedBooks( books.filter(function (book) {
                                  return book.publishDate === target;  
                              }) )
                              break;
                        
                }

      

      }
      const total=books.length
      
    return(
        <div class="container" id="products">
              <h2 className="mt-5">Our Books</h2>
        <div class="row">
          
          <div class="col-md-9">
          
            <h5>Total no.of books: {total}</h5>
            <h5>Count by filter: {count}</h5>

          </div>
        

    <div>
      
     
    </div>
  

            

          <div class="Filter d-flex">
            <div class="d-flex col-4 justify-content-start">
                {!filter && <button class="btn btn-primary " onClick={() => { setFilter(true) }}>Filter</button>}
                {filter && (
                <div class="d-flex align-items-center row">
                    <button class="btn btn-primary me-3"
                     onClick={() => {
                        setFilter(false)
                        setFiltername(0)
                        } 
                        }>X</button>
                    <div className="btn filter row" role="group" id="filter">
                    <button onClick={()=>setFiltername(1)} class="btn btn-light" type="button">Author</button>
                    <button onClick={()=>setFiltername(2)} class="btn btn-light ">Title</button>
                    <button onClick={()=>setFiltername(3)} class="btn btn-light">Subject</button>
                    <button onClick={()=>setFiltername(4)} class="btn btn-light">Publish date</button>
                    </div> 
                </div>
                )}
                
            </div>
            <div class="hello">
 

                  {  (filterdata != null && filtername!=0)? filterdata.map( (singleFilter) => {
                        return<div class=""> <button
                        type="button" class="btn btn-dark"
                        id="filter-data"
                        key={singleFilter}
                        onClick={ ()=>{search(
                            singleFilter
                        )} }
                      >
                        {singleFilter}
                      </button></div>
                    }) :<></>
                  }
                
            </div>
          </div>

              <div class="container">
                <div class="row">
                   {
                         (currentBook != null)?currentBook.map( (book,index)=>{

                            return(
                                <div key={index} class="col-md-4" style={{padding:'1rem'}}>
                                <div class="card" data-aos="fade-down">
                                  <img class="card-img-top" src={book.image}></img>
                                  <div class="card-body">
                                    <div class="card-title" id="title">Title: {book.title}</div>
                                    <div class="card-text" id="description">Author: {book.author}</div>
                                    <div class="card-text" id="description">Subject: {book.subject}</div>
                                    <div class="card-text" id="description">PublishDate: {book.publishDate}</div>
                                  </div>
                                </div>
                              </div> 
                            )
                        } ):<></>
                      }
                    
                {
                    <div>
                         {
                            (currentPage > 1)? <
                                button style={{ margin:"10px",width:"3rem" ,height:"3rem"}} 
                                onClick={()=>{
                                    setCurrentPage(currentPage-1);
                                    // pagechange()
                                    }
                                 }
                                type="button" class="btn btn-primary">{currentPage-1}</button> :<div></div>
                         }
                         <button style={{ border:"none" , background:" #000 ", margin:"10px",width:"3rem" ,height:"3rem"}} 
                         onClick={()=>{
                            setCurrentPage(currentPage);
                            // pagechange()
                            }
                         }
                          type="button" class="btn btn-primary">{currentPage}</button>

                          {
                            (currentPage < PageSize)?<button style={{ margin:"10px",width:"3rem" ,height:"3rem"}} 
                            onClick={()=>{
                                setCurrentPage(currentPage+1);
                                // pagechange()
                                }
                             }
                            type="button" class="btn btn-primary">{currentPage+1}</button>:<></>
                          }

                          <button style={{ margin:"10px", width:"4rem" ,height:"3rem"}} 
                          onClick={()=>{
                            setCurrentPage(PageSize);
                            // pagechange()
                            }
                         }
                          type="button" class="btn btn-primary">Last</button>
                      </div>
                }
                

                </div>

              </div>


            </div>
          </div>

        
    
    );
            }


            
        
