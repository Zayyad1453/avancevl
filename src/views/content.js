import React from 'react';
import Tab from '../components/tabs';
import Table from '../components/table';
import Pill from '../components/pill';

const Content = () => {
    return (
        <div className="container p-5">
            <div className="card main-bg shadow">
                {/* Main */}

                <div className="row col-12 m-3">
                        <span><Pill isButton={true} label={'Popular'}/></span>
                        <span><Pill isButton={true} isSubmit={true} label={'Arithmetic'}/></span>
                        <span><Pill isButton={true} label={'Popular'}/></span>
                        <span><Pill isButton={true} isSubmit={true} label={'More Filters'}/></span>
                    </div>
                <h6 className="card-header">
                    <i className="fa fa-calculator">{}</i>
                    <span className="content-header px-1">
                        Arithmetic
                    </span>
                    .
                    <span className="content-header px-1">
                        Real Problem
                    </span>
                </h6>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-7">
                            <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                <div className='row col-12 my-3'>
                                <Table/>
                                </div>
                            </p>
                        </div>
                        <div className="col-md-5">

                            <div className="container d-flex h-100">
                                <div className="row justify-content-center align-self-center mx-auto">
                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                </div>
                            </div>

                        </div>                        
                    </div>

                    <div className='row col-12 my-3'>
                        <Tab label={'Tab 1'} />
                        <Tab label={'Tab 2'} />
                        <Tab label={'Tab 3'} />
                    </div>


                    <div className="row">
                        <span className="ml-auto"><Pill isButton={true} label={'Skip'}/></span>
                        <span className="ml-1"><Pill isButton={true} isSubmit={true} label={'Submit'}/></span>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Content;
