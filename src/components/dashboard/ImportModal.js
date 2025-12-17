import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Upload, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import toast from 'react-hot-toast';

// Simple textarea component since we haven't created one yet
const SimpleTextarea = ({ className, ...props }) => (
    <textarea
        className={`flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
    />
);

const ImportModal = ({ isOpen, onClose, onImport }) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [parsedCount, setParsedCount] = useState(0);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setData(text);
            validateData(text);
        } catch (err) {
            toast.error('Failed to read clipboard. Please paste manually.');
        }
    };

    const validateData = (text) => {
        try {
            const json = JSON.parse(text);
            if (json.source === 'linkease-extension' && Array.isArray(json.tabs)) {
                setParsedCount(json.tabs.length);
                setError(null);
                return true;
            } else {
                setError('Invalid format. Please use the LinkEase Extension to copy tabs.');
                setParsedCount(0);
                return false;
            }
        } catch (e) {
            setError('Invalid JSON format. Please paste valid data from the extension.');
            setParsedCount(0);
            return false;
        }
    };

    const handleImport = () => {
        if (!data) return;

        try {
            if (validateData(data)) {
                const json = JSON.parse(data);
                onImport(json.tabs);
                setData('');
                setParsedCount(0);
                onClose();
                toast.success(`Successfully imported ${json.tabs.length} links!`);
            }
        } catch (e) {
            toast.error('Import failed');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Import Open Tabs</DialogTitle>
                    <DialogDescription>
                        Use the LinkEase Chrome Extension to "Copy All Tabs", then paste the data here to save them as a folder.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Button variant="outline" onClick={handlePaste} className="gap-2 self-start">
                            <Copy className="w-4 h-4" />
                            Paste from Clipboard
                        </Button>

                        <SimpleTextarea
                            placeholder='Paste data here (e.g. {"source": "linkease" ...})'
                            value={data}
                            onChange={(e) => {
                                setData(e.target.value);
                                validateData(e.target.value);
                            }}
                            className={error ? 'border-red-500 focus-visible:ring-red-500' : parsedCount > 0 ? 'border-green-500 focus-visible:ring-green-500' : ''}
                        />

                        {error && (
                            <div className="flex items-center gap-2 text-sm text-red-500">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        {parsedCount > 0 && !error && (
                            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                Ready to import {parsedCount} links
                            </div>
                        )}
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg text-xs text-muted-foreground space-y-2">
                        <p className="font-semibold">How to use:</p>
                        <ol className="list-decimal pl-4 space-y-1">
                            <li>Install the LinkEase helper extension (files in /extension)</li>
                            <li>Click the extension icon and hit "Copy All Tabs"</li>
                            <li>Come back here and paste the data</li>
                        </ol>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleImport} disabled={!parsedCount || !!error}>
                        <Upload className="w-4 h-4 mr-2" />
                        Import Session
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ImportModal;
