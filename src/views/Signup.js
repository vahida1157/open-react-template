import React from "react";
import classNames from "classnames";

const Signup = ({
                    className,
                    topOuterDivider,
                    bottomOuterDivider,
                    topDivider,
                    bottomDivider,
                    hasBgColor,
                    invertColor,
                    ...props
                }) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const myStyle = {
        "marginTop": "20px",
        "borderRadius": "10px",
        "padding": "10px",
        "width": "500px",
        "boxShadow": "1px 1px 10px 0px #8ab4ff",
    }
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className="illustration-section-01">
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            <span className="text-color-primary">ثبت نام</span>
                        </h1>
                    </div>
                    <div>
                        <form dir="rtl">
                            <div>
                                <div>
                                    <input style={myStyle} type="text" name="firstName" placeholder="نام"/>
                                </div>
                                <div>
                                    <input style={myStyle} type="text" name="lastName" placeholder="نام خانوادگی"/>
                                </div>
                                <div>
                                    <input style={myStyle} type="email" name="email" placeholder="ایمیل"/>
                                </div>
                                <div>
                                    <input style={myStyle} type="text" name={"username"} placeholder="نام کاربری"/>
                                </div>
                                <div>
                                    <input style={myStyle} type="password" autoComplete="new-password" name={"password"}
                                           placeholder="پسورد"/>
                                </div>
                                <div>
                                    <input style={myStyle} type="password" name={"password"} placeholder="تایید پسورد"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;