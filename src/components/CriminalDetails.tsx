import React from 'react';
import { Phone, Mail, MapPin, Calendar, AlertCircle, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface Criminal {
  id: number;
  name: string;
  age: number;
  gender: string;
  crimeType: string;
  status: string;
  arrestDate: string;
  imageUrl: string;
  details?: {
    height: string;
    weight: string;
    nationality: string;
    address: string;
    phone: string;
    email: string;
    priorConvictions: string[];
    notes: string;
  };
}

interface CriminalDetailsProps {
  criminal: Criminal;
  open: boolean;
  onClose: () => void;
}

const CriminalDetails: React.FC<CriminalDetailsProps> = ({ criminal, open, onClose }) => {
  // Mock additional details
  const details = {
    height: "5'11\"",
    weight: "175 lbs",
    nationality: "American",
    address: "123 Hidden Street, Metropolis",
    phone: "(555) 123-4567",
    email: "john.doe@email.com",
    priorConvictions: [
      "2022 - Petty Theft",
      "2021 - Breaking and Entering",
      "2020 - Vandalism"
    ],
    notes: "Subject is known to frequent downtown area. Has shown non-violent behavior but tendency to resist arrest. Multiple aliases used in past incidents."
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Criminal Profile</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[80vh] pr-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={criminal.imageUrl} 
                  alt={criminal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Status: {criminal.status}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  Arrest Date: {criminal.arrestDate || 'N/A'}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">{criminal.name}</h3>
                <p className="text-sm text-gray-400">ID: #{criminal.id.toString().padStart(6, '0')}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Age</p>
                  <p className="text-white">{criminal.age} years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Gender</p>
                  <p className="text-white">{criminal.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Height</p>
                  <p className="text-white">{details.height}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Weight</p>
                  <p className="text-white">{details.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Nationality</p>
                  <p className="text-white">{details.nationality}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {details.address}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    {details.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    {details.email}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Criminal History</h4>
                <div className="space-y-2">
                  <div className="flex items-start text-sm text-gray-400">
                    <FileText className="h-4 w-4 mr-2 mt-1" />
                    <div>
                      <p className="font-medium text-white mb-1">Current Charges</p>
                      <p>{criminal.crimeType}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium text-white mb-2">Prior Convictions</p>
                    <ul className="space-y-1">
                      {details.priorConvictions.map((conviction, index) => (
                        <li key={index} className="text-sm text-gray-400">• {conviction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Additional Notes</h4>
                <p className="text-sm text-gray-400">{details.notes}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CriminalDetails;