import React from "react";
import { H1, Button, Card, H2, H3 } from "@blueprintjs/core";
import { UserProfileDetails } from "../reducer/state";

interface HeaderProps {
  isLoggedIn: boolean;
  userProfile: UserProfileDetails;
}

export default ({ isLoggedIn, userProfile }: HeaderProps) => (
  <div>
    <H1>Your Breakdown</H1>
    {(!isLoggedIn || !userProfile) ? (
      <Card>
        <Button>Log into Spotify</Button>
      </Card>
    ) : (
      <Card>
        <H2>{userProfile.username}</H2>
        <H3>{userProfile.displayName}</H3>
      </Card>
    )}
  </div>
);
