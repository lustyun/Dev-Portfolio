import Image from "next/image";

import FardusFullPose from "/public/images/fardus-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
    return (
        <Container className="bg-gray-50" id="about">
            <div className="self-center">
                <Tag label="About me" />
            </div>

            <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
                {/* Image */}
                <div className="flex justify-center md:order-first md:justify-end">
                    <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                        <Image
                            src={FardusFullPose}
                            alt="Fullpose of Sagar"
                            className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                            style={{ objectFit: "cover" }}></Image>
                        <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex max-w-xl flex-col gap-6">
                    <Typography variant="h3">
                        Curious about me? Here you have it:
                    </Typography>
                    <Typography>
                        I'm a highly motivated Computer Science graduate with a
                        strong technical foundation in programming languages
                        such as Java, C++, JavaScript, Python, SQL, HTML, and
                        CSS. I've embarked on an exciting journey in the world
                        of technology, fueled by a passion for crafting
                        meaningful and innovative solutions.
                    </Typography>
                    <Typography>
                        My educational background includes a degree in Computer
                        Science, which has provided me with a solid
                        understanding of fundamental concepts and principles.
                        I've had the pleasure of working with a diverse range of
                        programming languages and tools, with a particular focus
                        on developing web and mobile applications using
                        frameworks like React and React Native.
                    </Typography>
                    <Typography>
                        Throughout my academic journey, I've transformed
                        concepts into reality through a variety of projects.
                        Notable examples include an admin dashboard website
                        using React and Firebase, a mobile app featuring React
                        Native and Async Storage, and a captivating lofi music
                        application built with Next.js.
                    </Typography>
                    <Typography>
                        Complementing my technical prowess, I've gained
                        invaluable experience as a Sortation Associate at
                        Amazon. This role has honed my ability to swiftly solve
                        problems, collaborate effectively, and resolve critical
                        issues under pressure.
                    </Typography>
                    <Typography>
                        I'm a firm believer in the power of continuous learning.
                        Beyond the classroom and workplace, I actively engage
                        with online courses, hackathons, and coding challenges.
                        The thrill of conquering fresh challenges and expanding
                        my horizons keeps me motivated and eager to learn.
                    </Typography>
                </div>
            </div>
        </Container>
    );
};

export default AboutMeSection;
