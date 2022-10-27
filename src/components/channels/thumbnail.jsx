import React, {Fragment} from 'react';

export const Thumbnail = ({channel}) => {
    const {
            id, title, description, description_2, 
            logo, banner, type, style, created
          } = channel;

    return ( 
        <Fragment>
            <div className="ctr-thumbnail">
                <div className="card-box" style={{backgroundImage:`url(${logo})`}}>
                    <div className="info-box">
                            <h4 className='sub-title'>{title}</h4>
                            <p className="description">{description}</p>
                    </div>
                    <h4 className='title'>{title}</h4>
                </div>
            </div>
            <style>{`
                .ctr-thumbnail {
                    background-color:#2C3E50;
                    min-height:400px;
                    width:400px;
                    border-radius:4px;
                    box-shadow:2px 2px 10px rgba(0, 0, 0, 0.8);
                    overflow:hidden;
                    border:0.5px solid #566573;
                }

                .ctr-thumbnail > .card-box {
                    background-color:none;
                    width:100%;
                    height:400px;
                    /*padding:10px;*/
                    background-size: 400px 400px;
                    background-repeat: no-repeat;
                    background-position: center;
                    overflow: hidden;

                    display:flex;
                    flex-direction:column;
                    justify-content:flex-end;
                    align-items:center;
                    position:relative;
                }

               
                .ctr-thumbnail > .card-box > .info-box {
                    background-color:none;
                    color:white;
                    width:100%;
                    height:100%;
                 
                    
                    padding:10px 15px;
                    position:absolute;
                    display:none;

                }

                .ctr-thumbnail > .card-box > .info-box .sub-title {
                    font-size:22px;
                    margin:5px 0;
                }

                .ctr-thumbnail > .card-box > .info-box .description {
                    /*background-color: rgba(255, 255, 255, 0.8);*/
                    /*color:black;*/
                    color:white;
                    max-height:50%;
                    font-size:14px;
                    border-radius:5px;
                    /*border:0.5px solid white;*/
                    padding:10px;
                    overflow-y:scroll;
                    -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
                    
                }

                .ctr-thumbnail > .card-box > .info-box .description::-webkit-scrollbar {
                    display: none;
                }
                  
                .ctr-thumbnail > .card-box > .title {
                    background-color:rgba(0, 0, 0, 0.6);
                    min-height:10px;
                    width:100%;
                    color:white;
                    font-size:16px;
                    font-weight:300;
                    text-align:center;
                    padding:10px 25px;
                    /*border-radius:50px;*/
                    display:inline-block;
                }

                .ctr-thumbnail > .card-box:hover .info-box {
                    background-color:rgba(0, 0, 0, 0.6);
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-thumbnail > .card-box:hover .title { 
                    display:none;
                }

                .ctr-thumbnail:hover {
                    transform:scale(1.02);
                    transition:all 0.1s ease-in;
                    box-shadow:5px 5px 15px black;
                }
            `}</style>
        </Fragment>
    );
};