import React from 'react';
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
    const entries = [1,2,3,4,54,65,6,7,8,89];

    return (
        <div className="journal__entries">
            {
                entries.map(value => (
                    <JournalEntry key={value} />
                ))
            }
        </div>
    );
};
