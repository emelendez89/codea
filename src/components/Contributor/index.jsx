import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import DateFormat from 'components/DateFormat'

import IconGitHub from 'images/svg/github.svg'
import IconGitLab from 'images/svg/gitLab.svg'
import IconStackoverflow from 'images/svg/stackoverflow.svg'
import IconTwitter from 'images/svg/social_twitter.svg'
import IconBitbucket from 'images/svg/bitbucket.svg'

import styles from './styles.module.scss'

class Contributor extends React.PureComponent {
  static propTypes = {
    contributor: PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.object,
      fullName: PropTypes.string,
      bioFull: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      work: PropTypes.string,
      education: PropTypes.string,
      registry: PropTypes.string,
    }),
  }

  render() {
    const { contributor } = this.props
    const {
      id,
      avatar,
      firstName,
      lastName,
      bio,
      location,
      work,
      registry,
      github,
      gitLab,
      bitbucket,
      stackoverflow,
      twitter,
    } = contributor

    return (
      <Paper className={styles.row}>
        <div className={styles.rowItemUser}>
          <div className={styles.contributor}>
            <div>
              <Img
                alt="avatar author"
                fixed={avatar.childImageSharp.fixed}
                className={styles.contributorImage}
              />
            </div>

            <div>
              <Typography component="h1" variant="h3" gutterBottom>
                {`${firstName} ${lastName}`}
              </Typography>

              <Typography variant="h5" color="textSecondary" gutterBottom>
                {`@${id}`}
              </Typography>

              <Typography variant="subtitle1">{bio}</Typography>

              <ul className={styles.social}>
                {github && (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={github}
                      title="gitHub">
                      <img
                        src={IconGitHub}
                        alt="gitHub"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                )}

                {gitLab && (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={gitLab}
                      title="gitLab">
                      <img
                        src={IconGitLab}
                        alt="gitLab"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                )}

                {bitbucket && (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={bitbucket}
                      title="bitbucket">
                      <img
                        src={IconBitbucket}
                        alt="gitLab"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                )}

                {stackoverflow && (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={stackoverflow}
                      title="stackoverflow">
                      <img
                        src={IconStackoverflow}
                        alt="gitLab"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                )}

                {twitter && (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={twitter}
                      title="stackoverflow">
                      <img
                        src={IconTwitter}
                        alt="gitLab"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.rowItemInformation}>
          {location && (
            <div>
              <Typography variant="h6">ubicación</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {location}
              </Typography>
            </div>
          )}

          {work && (
            <div>
              <Typography variant="h6">perfil</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {work}
              </Typography>
            </div>
          )}

          {registry && (
            <div>
              <Typography variant="h6">registro</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                <DateFormat date={registry} format="ll" />
              </Typography>
            </div>
          )}
        </div>
      </Paper>
    )
  }
}

export default Contributor
