import { motion } from "motion/react";
import { Globe, RocketLaunch, TrendUp, Cpu, Users, Sparkle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

const offices = [
  { lat: 30.2741, lng: 120.1551 },  // Hangzhou
  { lat: 48.8566, lng: 2.3522 },    // Paris
  { lat: 1.3521, lng: 103.8198 },   // Singapore
  { lat: 37.3861, lng: -122.0839 }, // Silicon Valley
];

function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}


function OfficeMarker({ lat, lng }: { lat: number; lng: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>>(null);
  const pos = latLngToVector3(lat, lng, 1.53);
  const normal = new THREE.Vector3(...pos).normalize();
  const up = new THREE.Vector3(0, 1, 0);
  const quat = new THREE.Quaternion().setFromUnitVectors(up, normal);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2.5) * 0.35;
      ref.current.scale.setScalar(s);
    }
    if (ringRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
      ringRef.current.scale.setScalar(s);
      ringRef.current.material.opacity = 0.5 - Math.sin(clock.getElapsedTime() * 1.5) * 0.25;
    }
  });

  return (
    <group position={pos} quaternion={quat}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#00d98b" />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.09, 32]} />
        <meshBasicMaterial color="#00d98b" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function EarthModel() {
  const groupRef = useRef<THREE.Group>(null);

  const [dayMap, normalMap, specMap] = useLoader(THREE.TextureLoader, [
    "/textures/earth_atmos_2048.jpg",
    "/textures/earth_normal_2048.jpg",
    "/textures/earth_specular_2048.jpg",
  ]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.35, -1.0, 0]}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.6, 0.6)}
          specularMap={specMap}
          specular={new THREE.Color(0x666666)}
          shininess={15}
        />
      </mesh>

      {offices.map((o, i) => (
        <OfficeMarker key={i} lat={o.lat} lng={o.lng} />
      ))}
    </group>
  );
}

const GlobeSection = () => {
  const { t } = useI18n();

  const hubs = [
    { city: t("global.hangzhou"), label: t("global.hangzhou.label") },
    { city: t("global.paris"), label: t("global.paris.label") },
    { city: t("global.singapore"), label: t("global.singapore.label") },
    { city: t("global.sv"), label: t("global.sv.label") },
  ];

  return (
    <section className="relative py-8 md:py-32 px-6 overflow-hidden rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-6 mb-6 md:mb-12 bg-white border border-slate-100">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-mist-green/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-mist-blue/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="heading-xl text-slate-900 mb-8 leading-tight">
              {t("global.heading1")}<span className="cool-gradient-text">{t("global.heading2")}</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
              {t("global.desc")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {hubs.map((hub, i) => (
                <motion.div
                  key={hub.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all group"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-mist-green transition-colors">{hub.city}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{hub.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-[120%] max-w-[800px] aspect-square -mr-[10%]"
              style={{ touchAction: "none" }}
            >
              <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true }}>
                <ambientLight intensity={2} />
                <directionalLight position={[5, 3, 5]} intensity={3} />
                <directionalLight position={[-4, 2, -3]} intensity={1.2} color="#aaccff" />
                <hemisphereLight args={["#ffffff", "#88aacc", 1]} />
                <Suspense fallback={null}>
                  <EarthModel />
                </Suspense>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={0.4}
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI * 0.3}
                  maxPolarAngle={Math.PI * 0.7}
                />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const engines = [
    {
      icon: <RocketLaunch className="w-7 h-7" />,
      title: t("about.engine1.title"),
      desc: t("about.engine1.desc"),
      color: "mist-green",
      link: "/services/investment",
    },
    {
      icon: <TrendUp className="w-7 h-7" />,
      title: t("about.engine2.title"),
      desc: t("about.engine2.desc"),
      color: "mist-blue",
      link: "/services/agent-global",
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: t("about.engine3.title"),
      desc: t("about.engine3.desc"),
      color: "mist-accent",
      link: "/services/consulting",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color="#00d98b" size="35vw" top="-10%" left="60%" delay={0} />
        <FloatingOrb color="#0070f3" size="30vw" top="50%" left="-5%" delay={3} />
        <FloatingOrb color="#7928ca" size="25vw" top="60%" left="30%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="heading-xl mb-5 md:mb-10 text-slate-900">
            {t("about.heading1")} <br />
            <span className="cool-gradient-text">{t("about.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("about.desc")}
          </p>
        </motion.div>
      </section>

      {/* Three Growth Engines */}
      <section className="py-8 md:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-20">
            <span className="text-mist-green font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">{t("about.engines.badge")}</span>
            <h2 className="heading-lg text-slate-900">{t("about.engines.title")}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engines.map((engine, i) => (
              <motion.div
                key={engine.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => navigate(engine.link)}
                className="glass-card group relative p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className={`absolute -top-20 -right-20 w-64 h-64 bg-${engine.color} rounded-full blur-[80px] pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 border-2 border-dashed border-${engine.color}/20 rounded-full`}
                    />
                    <div className="relative w-12 h-12 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5">
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`text-${engine.color}`}
                      >
                        {engine.icon}
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">{engine.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-base font-medium">{engine.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe + Offices */}
      <GlobeSection />

      {/* Industry Ecosystem */}
      <section className="py-8 md:py-32 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist-accent/10 border border-mist-accent/20 text-mist-accent text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">
              <Sparkle className="w-3 h-3" />
              {t("about.community.title")}
            </div>

            <div className="flex justify-center gap-6 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, color: "mist-green" },
                { icon: <Globe className="w-5 h-5" />, color: "mist-blue" },
                { icon: <Sparkle className="w-5 h-5" />, color: "mist-accent" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5 text-${item.color}`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              {t("about.community.desc")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
