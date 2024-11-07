import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import Card from '@/components/common/Card';
import { playlistEmbedUrl, profile } from '@/constants/profile';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import * as styles from './styles.css';

const ProfileGrid = () => {
  const { author } = useSiteMetadata();

  const query = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/static/assets/images/profile.*/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const { file } = query;
  const profileImage: IGatsbyImageData | undefined = getImage(
    file.childImageSharp.gatsbyImageData || null,
  );

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.title}>Profile</h3>
        <Card.Root style={{ backgroundColor: profile.cardBackgroundColor }}>
          <Card.Content>
            <div className={styles.cardProfileContainer}>
              {profileImage && (
                <GatsbyImage
                  className={styles.cardProfileImage}
                  alt="Profile"
                  image={profileImage}
                  draggable={false}
                  style={{
                    boxShadow: `0px 10px 39px ${profile.profileImageShadowColor}`,
                    filter: profile.profileImageFilter,
                  }}
                />
              )}
              <p className={styles.cardProfileAuthor} style={{ color: profile.authorTextColor }}>
                {author}
              </p>
            </div>
            <div className={styles.cardProfileContainer}>
              {profile.userDetails.map(item => (
                <div key={item.title}>
                  <h3 className={styles.cardProfileTitle} style={{ color: profile.titleTextColor }}>
                    {item.title}
                  </h3>
                  <p
                    className={styles.cardProfileContent}
                    style={{ color: profile.contentTextColor }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </Card.Content>
          {/*<ProfileDialog>*/}
          {/*  <button className={styles.profileModalButton} type="button">*/}
          {/*    <span*/}
          {/*      className={clsx('material-symbols-rounded', styles.profileModalButtonIcon)}*/}
          {/*      style={{ color: profile.modalButtonColor }}*/}
          {/*    >*/}
          {/*      add*/}
          {/*    </span>*/}
          {/*  </button>*/}
          {/*</ProfileDialog>*/}
        </Card.Root>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Playlist</h3>
        <Card.Root style={{ backgroundColor: '#F8F8FA' }}>
          <iframe
            title="playlist"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="182"
            style={{ width: '100%', overflow: 'hidden', borderRadius: '14px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={playlistEmbedUrl}
          />
        </Card.Root>
      </div>
    </section>
  );
};

export default ProfileGrid;
