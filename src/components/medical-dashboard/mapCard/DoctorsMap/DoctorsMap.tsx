import React from 'react';

import L, { IconOptions, PointExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import { Doctor } from '@app/api/doctors.api';
import { ReactComponent as MapBackgroundIcon } from '@app/assets/icons/map-background.svg';
import { DoctorProfile } from '@app/components/common/DoctorProfile/DoctorProfile';
import { useResponsive } from '@app/hooks/useResponsive';

import * as S from './DoctorsMap.styles';

const LARGE_MARKER_SIZE: PointExpression = [50, 50];
const MARKER_SIZE: PointExpression = [30, 30];

const defineIconSize = (isDesktop: boolean): PointExpression => {
  return (isDesktop && LARGE_MARKER_SIZE) || MARKER_SIZE;
};

class MarkerDoctor extends L.Icon {
  constructor(props: IconOptions, isDesktop: boolean) {
    const iconSIze = defineIconSize(isDesktop);
    super({
      popupAnchor: iconSIze,
      iconSize: iconSIze,
      ...props,
    });
  }
}

interface DoctorsMapProps {
  doctors: Doctor[];
}

export const DoctorsMap: React.FC<DoctorsMapProps> = ({ doctors }) => {
  const { isDesktop } = useResponsive();

  const mapDoctors = doctors.filter(({ gps }) => gps);

  return (
    <S.DoctorsMap>
      <MapBackgroundIcon />
      {mapDoctors.map((marker) => (
        <Marker
          key={marker.id}
          icon={
            new MarkerDoctor(
              {
                iconUrl: marker.imgUrl,
                iconRetinaUrl: marker.imgUrl,
              },
              isDesktop
            )
          }
          position={[marker.gps?.latitude || 0, marker.gps?.longitude || 0]}
        >
          <Popup>
            <DoctorProfile
              avatar={marker.imgUrl}
              name={marker.name}
              speciality={marker.specifity}
              rating={marker.rating}
            />
          </Popup>
        </Marker>
      ))}
    </S.DoctorsMap>
  );
};
