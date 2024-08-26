import SliderComponent from '../../components/SliderComponent'

import { data } from '../../dataProject'
import React, { useState } from 'react'
import './index.scss'
import noithat from '../../assets/images/livingroom.png'
import thietke from '../../assets/images/sketch.png'
import lapdat from '../../assets/images/wrench.png'
import xuatkhau from '../../assets/images/export.png'


import tencongty from '../../assets/images/id-card.png'
import diachi from '../../assets/images/pin.png'
import sdt from '../../assets/images/telephone.png'
import email from '../../assets/images/mail.png'
import website from '../../assets/images/world-wide-web.png'

import bg1 from '../../assets/images/bg1.jpg'
import FooterConponent from '../../components/FooterConponent'
import SliderProject from '../../components/SliderProject'



const HomePage = () => {
    const [show, setShow] = useState(true)
    const [showActive, setShowActive] = useState(0)

    const handleShowProject = (i) => {
        setShowActive(i)
        if (i == showActive && show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    return (
        <div>


            <SliderComponent
                images={[
                    'https://4kwallpapers.com/images/wallpapers/modern-architecture-look-up-reflection-glass-building-3840x2160-2881.jpg'
                    , 'https://plus.unsplash.com/premium_photo-1669412515480-ab95d79d47b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'
                    , 'https://i.pinimg.com/originals/0b/8c/55/0b8c551e7041ac733f985a40c10343c7.jpg'
                ]}
            />

            <div className='company'>
                <span className='service'>Công ty <span> TNHH THIẾT KẾ & THI CÔNG NỘI THẤT ONG</span></span><b>Xin chào</b>
            </div>

            <div id='about'></div>
            <div className='topImg'>
                <img src={bg1} />
                <div className='wrapper'>

                    <span className='title' style={{ animation: 'showText 1s ease-in-out 1.5s forwards' }}>Lời giới thiệu</span>

                    <div className='content'>
                        <span style={{ animation: 'showText 1s ease-in-out 2.3s forwards' }}>Công Ty TNHH Thiết Kế & Thi Công Nội Thất Ong là đơn vị chuyên sản xuất & tư vấn, thiết kế thi công nội thất. Thiết kế thi công các công trình biệt thự, nhà phố, căn hộ, chung cư và đặc biệt thiết kế trang trí văn phòng, showroom, nhà hàng, khách sạn...</span>
                        <span style={{ animation: 'showText 1s ease-in-out 2.6s forwards' }}>Ong Decor tập trung với thế mạnh là đơn vị sản xuất nội thất hàng đầu cho thi trường trong nước và xuất khẩu cho các Đối tác, Khách hàng lớn ngoài nước .Ong Decor luôn lấy tiêu chí thẩm mỹ, hiệu quả và đúng tiến độ làm phương châm làm việc..</span>
                        <span style={{ animation: 'showText 1s ease-in-out 3.1s forwards' }}>Công ty với đội ngũ kỹ sư giỏi và giàu kinh nghiệm, thợ thi công tay nghề cao, nên chúng tôi tự tin đem đến cho khách hàng những sản phẩm tốt nhất. Ong Decor không chỉ thiết kế đơn thuần mà đặc biệt chú trọng các giải pháp kiến trúc, nội thất kết hợp với phong thủy nhăm giải quyết những vấn đề về không gian sống của bạn.</span>
                    </div>
                </div>
            </div>

            {/* <div style={{height: 100}}></div> */}
            <div id='service'></div>
            <div className='bottomImg'>
                <img className='background' src='https://png.pngtree.com/background/20230611/original/pngtree-architect-design-3d-visualisation-picture-image_3170395.jpg' />
                <ul className='list'>
                    <div>
                        <img src={noithat} />
                        <span>Sản xuất đồ gô nội thất đa dạng về phong cách tân cô điến, cố điến, hiện đại như bàn ghế, giường tủ, kệ tỉ vi...</span>
                    </div>
                    <div>
                        <img src={thietke} />
                        <span>Tư vẫn thiết kế nội thất: Dịch vụ khảo sát, tư vẫn thiết kế nội thất, bố cục layout trên (CAD) mô hình (3D max), lên dự toán tổng thể nội thất.</span>
                    </div>
                    <div>
                        <img src={lapdat} />
                        <span>Thi công lắp đặt hoàn thiện ngoai nội thất cho các Công Trình Nhà Phố, Biệt Thư, Nhà Hàng Khách Sạn, Resort...</span>
                    </div>
                    <div>
                        <img src={xuatkhau} />
                        <span>Sản xuất đô gô xuất khẩu ra thị trường Châu Âu</span>
                    </div>
                </ul>
                <span className='service'><b>Dịch vụ</b> của chúng tôi </span>
            </div>



            <div id='contact'></div>
            <div className='information'>
                <div className='inforText'>
                    <ul className='inforList'>
                        <div className='infor'>
                            <div>
                                <img src={tencongty} />
                            </div>
                            <p>
                                <b>Tên công ty: </b>
                                <span>CÔNG TY TNHH THIẾT KẾ & THI CÔNG NỘI THẤT ONG</span>
                            </p>
                        </div>

                        <div className='infor'>
                            <div>
                                <img src={diachi} />
                            </div>
                            <p>
                                <b>Địa chỉ trụ sở: </b>
                                <span>115/2B, Đường Nguyễn Văn, Xã Xuân Thới Sơn, Huyện Hóc Môn</span>
                            </p>
                        </div>

                        <div className='infor'>
                            <div>
                                <img src={sdt} />
                            </div>
                            <p>
                                <b>Số điện thoại: </b>
                                <span>0972 326 272-0933 574 576</span>
                            </p>
                        </div>

                        <div className='infor'>
                            <div>
                                <img src={email} />
                            </div>
                            <p>
                                <b>Email: </b>
                                <span>son1182004@gmail.com</span>
                            </p>
                        </div>

                        <div className='infor'>
                            <div>
                                <img src={website} />
                            </div>
                            <p>
                                <b>Website: </b>
                                <span>http://localhost:3001/</span>
                            </p>
                        </div>
                    </ul>
                    <ul style={{ marginTop: '60px' }}>
                        <div>
                            <b>Vốn điều lệ: </b>
                            <span>1.000.000.000 (1 tỷ đồng)</span>
                        </div>
                        <div>
                            <b>Mã số thuế: </b>
                            <span>0314555248</span>
                        </div>
                        <div>
                            <b>Đại diện pháp luật: </b>
                            <span>Hoàng Văn Thái Sơn</span>
                        </div>
                    </ul>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24659.108336158948!2d105.87008461297685!3d21.09269128264674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzQxLjkiTiAxMDXCsDUyJzAwLjkiRQ!5e0!3m2!1svi!2s!4v1723187855111!5m2!1svi!2s"
                    width="600"
                    height="600"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div id='project'></div>
            <div className='showList'>
                <SliderProject >
                    {data?.map((project, i) => (
                        <div key={i} className='card' onClick={() => handleShowProject(i)}>
                            <img style={{ borderColor: show && i == showActive ? 'orange' : '#1f6dc0' }} src={project.imgs[0]} />
                        </div>
                    ))}
                </SliderProject>


                {show && <div className='show'>
                    <div className='show-left'>
                        <div className='show-left-top-img'><img src={data[showActive].imgs[0]} /></div>
                        <div className='show-left-bottom-img'>
                            <ul>
                                {data[showActive].imgs.map((img, i) => (
                                    <img key={i} src={img} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='show-right'>
                        <h4>THÔNG TIN DỰ ÁN</h4>
                        <ul>
                            {Object.entries(data[showActive].infor).map(([key, value]) => (
                                <div key={key}>
                                    <b>{key}</b>
                                    <span>{value}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>}



                <span className='service'><b>Dự án</b> tiêu biểu </span>
            </div>

                            <div id='contactForm'></div>

            <div className='contactform'>
                <h3>Đăng ký tư vấn miễn phí</h3>
                <div className='contact-wrapper'>
                    <div className='contact-left'>
                        <div className='input-group'>
                            <label htmlFor='name'>Họ và tên</label>
                            <input id='name' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='phone'>Số điện thoại</label>
                            <input id='phone' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='note'>Lời nhắn</label>
                            <textarea />
                        </div>
                    </div>
                    <div className='contact-right'>
                        <img src='https://media.idownloadblog.com/wp-content/uploads/2021/08/achitecture-wallpaper-iPhone-idownloadblog-pierre-chatel-innocenti.jpg' />
                    </div>
                </div>
            </div>



            <FooterConponent />
        </div>
    )
}

export default HomePage