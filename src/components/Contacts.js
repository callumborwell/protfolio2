import React from 'react';
import '../css/contacts.css';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => (
    <footer className="text-center" role="contentinfo" id="contacts" aria-labelledby="footer-title">

        <div className="container">
            <aside className="row justify-content-center py-3 md:pt-4 lg:pt-5" role="complementary">
                <div class="col-12 mb-0.5 lg:mb-1 lg:mt-2">
                    <div className='section-header-box align-middle'>
                        <div className='section-header-box-content'>
                            Find Me On<span className="sr-only"> the following networks</span>
                        </div>
                    </div>
                    {/* <div className='section-header'>
                        Find Me On<span className="sr-only"> the following networks</span>
                    </div> */}
                </div>

                <div className="col-auto mt mb-0">
                    <a href='https://www.linkedin.com/in/callum-borwell' title='LinkedIn' aria-describedby="new-window" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div class="col-auto mt mb-0">
                    <a href='https://www.instagram.com/dapperboar/' title='Instagram' aria-describedby="new-window" rel="noopener noreferrer">
                        <FaInstagramSquare />
                    </a>
                </div>
                <div class="col-auto mt mb-0">
                    <a href='https://github.com/callumborwell' title='GitHub' aria-describedby="new-window" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </aside>

            <h2 class="sr-only">Useful links</h2>
            <div class="row fs-4 justify-content-center contact-bottom">
                <div class="col-auto">My email address : <a href="mailto:callum.borwell@gmail.com">callum.borwell@gmail.com</a></div>
                <div class="col-auto px-0 text-primary-light" aria-hidden="true">•</div>
                <div class="col-auto">Source code on <a href="" rel="noopener noreferrer">GitHub</a></div>
            </div>
        </div>

        {/* <div className='section-header align-middle'>
            Find Me On
        </div>

        <div className='contact-icons'>
            <a href='https://www.linkedin.com/in/callum-borwell' title='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/dapperboar/' title='Instagram'>
                <FaInstagramSquare />
            </a>
            <a href='https://github.com/callumborwell' title='GitHub'>
                <FaGithub />
            </a>
        </div> */}

    </footer>

    /* <footer class="bg-black text-center" role="contentinfo" id="footer" aria-labelledby="footer-title">
        <div class="container">
            <aside class="row justify-center py-3 md:pt-4 lg:pt-5" role="complementary">
                <div class="col-12 mb-0.5 lg:mb-1 lg:mt-2">
                    <h2 class="h2-gradient" id="footer-title">
                        <span>Find me on</span
                        ><span class="sr-only">the following networks</span>
                    </h2>
                </div>
                <div class="col-auto mt mb-0">
                    <a class="fs-fluid px-0.5" href="https://codepen.io/twogrey" target="_blank" rel="noopener noreferrer" title="Codepen" aria-describedby="new-window" style="--min:2; --max:4">
                        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-codepen"></use></svg>
                    </a>
                </div>
                <div class="col-auto mt mb-0">
                    <a class="fs-fluid px-0.5" href="https://twitter.com/twogrey" target="_blank" rel="noopener noreferrer" title="Twitter" aria-describedby="new-window" style="--min:2; --max:4">
                        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-twitter"></use></svg>
                    </a>
                </div>
                <div class="col-auto mt mb-0">
                    <a class="fs-fluid px-0.5" href="https://www.linkedin.com/in/%F0%9F%8E%B2-alexis-degryse-02b640b0" target="_blank" rel="noopener noreferrer" title="Linkedin" aria-describedby="new-window" style="--min:2; --max:4">
                        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-linkedin"></use></svg>
                    </a>
                </div>
            </aside>
            <h2 class="sr-only">Useful links</h2>
            <div class="row fs-4 justify-center">
                <div class="col-auto">My email address : <a href="mailto:alexis.degryse@gmail.com">alexis.degryse@gmail.com</a></div>
                <div class="col-auto px-0 text-primary-light" aria-hidden="true">•</div>
                <div class="col-auto"><button class="btn-as-link js-modal" type="button" data-modal-id="modal-legal" aria-haspopup="dialog">Legal notices</button></div>
                <div class="col-auto px-0 text-primary-light" aria-hidden="true">•</div>
                <div class="col-auto">Source code on <a href="https://github.com/twogrey/alexis-degryse.com" rel="noopener noreferrer">GitHub</a></div>
            </div>
        </div>
    </footer> */
)

export default Contacts;