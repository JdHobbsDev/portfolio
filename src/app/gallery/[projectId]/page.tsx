"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaTimes, FaExpand, FaArrowLeft, FaBrain, FaGamepad, FaTools, FaShieldAlt } from "react-icons/fa";


type ProjectId = 'minds-matter-uk' | 'asteroid-studios-ticket';


type ProjectInfo = {
    title: string;
    icon: JSX.Element;
    color: string;
};


type ProjectsData = {
    [key in ProjectId]: ProjectInfo;
};

export default function GalleryPage() {
    const params = useParams();
    const router = useRouter();
    const projectId = params.projectId as string;

    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);

    const projectsData: ProjectsData = {
        "minds-matter-uk": {
            title: "Minds Matter UK",
            icon: <FaBrain className="text-white text-2xl" />,
            color: "from-purple-600 to-indigo-600",
        },
        "asteroid-studios-ticket": {
            title: "Asteroid Studios Ticket Bot",
            icon: <FaGamepad className="text-white text-2xl" />,
            color: "from-emerald-600 to-teal-600",
        },
    };

    useEffect(() => {
        const isValidProjectId = (id: string): id is ProjectId => {
            return Object.keys(projectsData).includes(id);
        };

        if (projectId && isValidProjectId(projectId)) {
            setProjectInfo(projectsData[projectId]);
        } else {
            router.push('/projects');
            return;
        }

        fetch("/api/project-images")
            .then((res) => res.json())
            .then((data) => {
                if (data[projectId]) {
                    setImages(data[projectId] || []);
                } else {
                    const simulatedImages = Array.from(
                        { length: 12 },
                        (_, i) => `/projects/${projectId === "minds-matter-uk" ? "minds-matter" :
                            projectId === "asteroid-studios-ticket" ? "asteroid-ticket" :
                                "utility-bot"
                            }/screenshot-${i + 1}.png`
                    );
                    setImages(simulatedImages);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching project images:", error);
                setLoading(false);
                const simulatedImages = Array.from(
                    { length: 12 },
                    (_, i) => `/projects/${projectId === "minds-matter-uk" ? "minds-matter" :
                        projectId === "asteroid-studios-ticket" ? "asteroid-ticket" :
                            "utility-bot"
                        }/screenshot-${i + 1}.png`
                );
                setImages(simulatedImages);
            });
    }, [projectId, router]);

    const expandImage = (imageSrc: string) => {
        setExpandedImage(imageSrc);
        document.body.style.overflow = "hidden";
    };

    const closeExpandedImage = () => {
        setExpandedImage(null);
        document.body.style.overflow = "";
    };

    const goBack = () => {
        router.push('/projects');
    };

    if (!projectInfo) {
        return (
            <main className="min-h-screen bg-[#0B1120] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2942]/50 via-[#0B1120] to-[#0B1120] text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0B1120] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2942]/50 via-[#0B1120] to-[#0B1120] text-white py-8 sm:py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[20%] left-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
                    <div
                        className="absolute top-[50%] right-[15%] w-56 sm:w-80 h-56 sm:h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"
                        style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                        className="absolute bottom-[15%] left-[20%] w-48 sm:w-72 h-48 sm:h-72 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
                        style={{ animationDelay: "4s" }}
                    ></div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">

                <div className="flex items-center mb-6 sm:mb-8 gap-3 sm:gap-4">
                    <button
                        onClick={goBack}
                        className="bg-blue-600/20 hover:bg-blue-600/30 text-white p-2 sm:p-3 rounded-full transition-colors flex items-center justify-center"
                        aria-label="Go back to projects"
                    >
                        <FaArrowLeft className="text-base sm:text-lg" />
                    </button>

                    <div className="flex items-center">
                        <div className="min-w-[36px] sm:min-w-[48px] min-h-[36px] sm:min-h-[48px] flex items-center justify-center mr-3 sm:mr-4">
                            <div
                                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${projectInfo.color} shadow-lg`}
                            >
                                {projectInfo.icon}
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
                            {projectInfo.title} Gallery
                        </h1>
                    </div>
                </div>

     
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-blue-100/70">No screenshots available for this project.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer"
                                onClick={() => expandImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`${projectInfo?.title} screenshot ${index + 1}`}
                                    className="w-full h-auto rounded-lg border border-[#1E293B] hover:border-blue-500/50 transition-all duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                    <div
                                        className="bg-blue-600/80 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition-colors"
                                        aria-label="Expand image"
                                    >
                                        <FaExpand className="text-white text-base sm:text-lg" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

          
            {expandedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-[101] flex items-center justify-center p-2 sm:p-4"
                    onClick={closeExpandedImage}
                >
                    <div className="relative max-w-full max-h-full">
                        <img
                            src={expandedImage}
                            alt="Expanded view"
                            className="max-w-full max-h-[85vh] sm:max-h-[90vh] w-auto h-auto object-contain"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                            }}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpandedImage();
                            }}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
                            aria-label="Close expanded view"
                        >
                            <FaTimes className="text-lg sm:text-xl" />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}