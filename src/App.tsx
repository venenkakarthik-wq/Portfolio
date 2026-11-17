import { useState, useEffect, useCallback } from 'react';
import {
  GALLERY_VISUALS,
  PROJECTS,
  type ProjectItem,
  type ProjectVisual,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectGallerySection } from './components/ProjectGallerySection';
import { PhysicalDesignFlowSection } from './components/PhysicalDesignFlowSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactFooter } from './components/ContactFooter';
import { LightboxModal } from './components/LightboxModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'gallery',
  'pd-flow',
  'education',
  'resume',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    visuals: ProjectVisual[];
    initialIndex: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenLightbox = useCallback(
    (visuals: ProjectVisual[], initialIndex: number, title: string) => {
      setLightboxState({ visuals, initialIndex, title });
    },
    []
  );

  const handleInspectHeroVisual = useCallback(() => {
    const cva6Visuals = GALLERY_VISUALS.filter((v) => v.projectId === 'cva6-processor');
    const routedLayoutIdx = cva6Visuals.findIndex(
      (v) => v.id === 'cva6-routed-die-layout'
    );
    setLightboxState({
      visuals: cva6Visuals,
      initialIndex: routedLayoutIdx >= 0 ? routedLayoutIdx : 0,
      title: 'CVA6 Processor – Post-Route Completed',
    });
  }, []);

  const selectedProject: ProjectItem | null =
    PROJECTS.find((p) => p.id === selectedProjectId) ?? null;

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col">
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <HeroSection onInspectHeroVisual={handleInspectHeroVisual} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProjectId(project.id)}
          onOpenLightbox={handleOpenLightbox}
        />
        <ProjectGallerySection onOpenLightbox={handleOpenLightbox} />
        <PhysicalDesignFlowSection />
        <EducationSection />
        <ResumeSection />
      </main>

      <ContactFooter />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {lightboxState && (
        <LightboxModal
          visuals={lightboxState.visuals}
          initialIndex={lightboxState.initialIndex}
          projectTitle={lightboxState.title}
          onClose={() => setLightboxState(null)}
        />
      )}
    </div>
  );
}
