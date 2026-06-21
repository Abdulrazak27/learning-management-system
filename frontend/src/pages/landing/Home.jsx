import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import { faGraduationCap, faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { courseService } from "../../api/course.service";

function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await courseService.getAllCourses();
        if (res.success) {
          setCourses(res.data.slice(0, 6));
        }
      } catch (err) {
        console.error("Failed to load courses:", err);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("starCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));
    const shootingStars = [];
    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 4,
        opacity: 1,
        angle: Math.PI / 5,
      });
    };
    const shootInterval = setInterval(addShootingStar, 2800);
    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.opacity += s.twinkleSpeed;
        if (s.opacity > 1 || s.opacity < 0) s.twinkleSpeed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + Math.abs(s.opacity) + ")";
        ctx.fill();
      });
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.len,
          ss.y - Math.sin(ss.angle) * ss.len
        );
        const grad = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.len,
          ss.y - Math.sin(ss.angle) * ss.len
        );
        grad.addColorStop(0, "rgba(200,200,255," + ss.opacity + ")");
        grad.addColorStop(1, "rgba(200,200,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;
        if (ss.opacity <= 0) shootingStars.splice(i, 1);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const featureData = [
    { icon: faGraduationCap, title: "Scholarship Facility", desc: "Originality is the essence of true scholarship.", borderColor: "#7c3aed" },
    { icon: faStar, title: "Valuable Courses", desc: "Online education is like a rising tide, it lifts all boats.", borderColor: "#f59e0b" },
    { icon: faAward, title: "Global Certification", desc: "A certificate without knowledge is like a gun without bullets.", borderColor: "#06b6d4" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar page="home" />

      {/* Hero Section */}
      <section
        className="relative text-center px-6 h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#06061a" }}
      >
        <canvas id="starCanvas" className="absolute inset-0 w-full h-full z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
          <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-semibold text-cyan-300 border border-cyan-500/30"
            style={{ background: "rgba(6,182,212,0.1)" }}
          >
            🚀 The Future of Learning is Here
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Enhance your future with
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #06b6d4)" }}>
              Nexora Academy
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10">
            Unlock your potential with hundreds of courses, certifications, and skills to grow your career.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/courses")}
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              Explore Courses
            </button>
            <a href="#features"
              className="px-8 py-3 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-300">
              Learn More
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "10K+", label: "Students" },
              { value: "15+", label: "Courses" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Awesome Features</h1>
        <p className="text-gray-600 mb-10">Chance to enhance yourself</p>
        <div className="grid md:grid-cols-3 gap-8 md:px-24">
          {featureData.map((feature, index) => (
            <div key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-t-4"
              style={{ borderColor: feature.borderColor }}>
              <FontAwesomeIcon icon={feature.icon} className="text-4xl mb-4" style={{ color: feature.borderColor }} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses Section — fetched from API */}
      <section id="course" className="px-6 py-16 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-4">Our Popular Courses</h1>
        <p className="text-gray-600 text-center mb-10">10,000+ enrolled</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-24">
          {courses.length === 0 ? (
            <div className="col-span-3 text-center text-gray-400 py-12">Loading courses...</div>
          ) : (
            courses.map((course) => (
              <div key={course.course_id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate("/courses")}
              >
                <img
                  src={course.p_link}
                  alt={course.course_name}
                  onError={(e) => e.target.src = "/logo192.png"}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h6 className="text-lg font-semibold mb-2">{course.course_name}</h6>
                  <p className="text-sm text-gray-500 mb-2">by {course.instructor}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">(239)</span>
                  </div>
                  <div className="font-bold" style={{ color: "#7c3aed" }}>
                    Rs.{parseFloat(course.price).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/courses")}
            className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            View All Courses
          </button>
        </div>
      </section>

      {/* Registration + Timer Section */}
      <section
        className="relative px-6 py-24 flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(135deg, #06061a, #0d1b4b)" }}
      >
        <div className="relative z-10 max-w-3xl">
          <p className="font-bold mb-4 text-lg uppercase tracking-wider text-cyan-400">
            Get 100 Online Courses for Free
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Register Now and Unlock Your Learning Journey
          </h1>
          <p className="mb-12 text-lg text-gray-300">
            Join thousands of learners and access our top courses for free.
          </p>
          <div className="flex flex-wrap md:gap-6 gap-2 justify-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index}
                className="flex flex-col items-center justify-center backdrop-blur-md md:px-8 md:py-6 px-4 py-4 rounded-2xl border border-white/10"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <p className="md:text-5xl text-3xl font-extrabold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #06b6d4)" }}>
                  {String(item.value).padStart(2, "0")}
                </p>
                <span className="text-sm font-semibold mt-1 tracking-wide text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/register")}
            className="mt-12 px-10 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            Register Now — It's Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;