
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from '../style/projectcard.module.css';

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <div className={styles.projectCard}>
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link href={link} legacyBehavior>
          <a className="text-indigo-500 hover:underline mt-2 inline-block">View Project</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
